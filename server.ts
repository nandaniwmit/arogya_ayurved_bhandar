import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Increase payload limit to support base64 prescription uploads
  app.use(express.json({ limit: "15mb" }));

  // Initialize Gemini client lazily and safely
  let ai: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    console.log("Gemini API Client initialized successfully.");
  } else {
    console.warn("GEMINI_API_KEY not found in environment. AI assistant running in smart offline mode.");
  }

  // API Route: AI Ayurvedic & Pharmacy Assistant Chat
  app.post("/api/ai-chat", async (req, res) => {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!ai) {
      // Elegant localized simulation response when Gemini Key isn't loaded
      const trimmedMsg = message.toLowerCase();
      let responseText = "Namaste! I am the Ayurvedic health assistant at Arogya Ayurved Bhandar. ";
      
      if (trimmedMsg.includes("cough") || trimmedMsg.includes("cold")) {
        responseText += "For cough and seasonal cold, we highly recommend Ayurvedic formulations like Tulsi Ghan Vati, Kanth Sudha, or Divya Swasari Ras. Taking ginger juice mixed with pure organic honey three times a day also provides rapid relief. Feel free to visit our store on Tekari Road, Gaya to get genuine herbs!";
      } else if (trimmedMsg.includes("digest") || trimmedMsg.includes("stomach") || trimmedMsg.includes("gas")) {
        responseText += "For digestion and stomach comfort, classic Ayurvedic solutions like Triphala Churna, Hingwashtak Churna, or Lavan Bhaskar Churna work beautifully. Drinking warm water with fennel (saunf) seeds after meals is also helpful. You can get all these authentic remedies at our Gaya store.";
      } else if (trimmedMsg.includes("stress") || trimmedMsg.includes("sleep") || trimmedMsg.includes("brain")) {
        responseText += "For reducing stress, boosting cognitive focus, and improving sleep quality, Ashwagandha Churna or tablets, Brahmi Vati, and Shankhpushpi syrup are highly effective. We keep a fresh stock of these organic supplements at Arogya Ayurved Bhandar.";
      } else if (trimmedMsg.includes("joint") || trimmedMsg.includes("pain") || trimmedMsg.includes("arth")) {
        responseText += "For joint discomfort or muscular pain, Ortho support oils (like Mahanarayan Taila, Peedantak Taila) and herbal capsules (such as Yograj Guggulu or Shallaki) provide natural nourishment. Applying lukewarm oil gently to the affected area is traditional and effective.";
      } else if (trimmedMsg.includes("immunity") || trimmedMsg.includes("fever") || trimmedMsg.includes("giloy")) {
        responseText += "To build strong natural immunity, standard daily practices include consuming Chyawanprash, Giloy Ghanvati, and drinking herbal teas (Kadha) containing Cinnamon, Tulsi, Black Pepper, and Ginger. We carry certified pure formulations of these products.";
      } else {
        responseText += "I am happy to guide you! We are your premier local medical store on Tekari Road, Gaya, specializing in authentic Ayurvedic medicines (Patanjali, Baidyanath, Dabur, Zandu, etc.), general prescriptions, surgical products, baby care, and daily medical needs. To order any specific medicine, please call us at 09931075347 or submit the WhatsApp Order Form on our page!";
      }
      return res.json({ text: responseText });
    }

    try {
      const systemInstruction = `
You are the highly knowledgeable AI Ayurvedic Specialist and Pharmacy consultant for "Arogya Ayurved Bhandar", a premium medical store and herbal pharmacy located at Tekari Rd, Dhamitola, Dulhingunj, Gaya, Bihar 823001 (Phone: 09931075347).
Always welcome users with a respectful "Namaste" or "Hello".
Provide accurate, friendly, and practical Ayurvedic recommendations alongside safe advice on general healthcare queries.
Instruct users clearly that wellness suggestions are for informational purposes and they should present prescriptions or consult certified doctors for active treatments.
Explain the benefits of classical herbs (such as Ashwagandha, Tulsi, Triphala, Shatavari, Giloy, Neem, and Turmeric) and suggest authentic brands available at your store (like Patanjali, Baidyanath, Dabur, Hamdard, Charak, etc.).
Keep your paragraphs compact, scannable, using warm, reassuring language and clean bullet points.
Highlight that the customer can easily upload prescriptions or list requirements in our "WhatsApp Order" section for swift home delivery or local pickup in Gaya.
`;

      const contents = [];
      if (history && Array.isArray(history)) {
        for (const msg of history) {
          contents.push({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
          });
        }
      }
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: "Failed to generate AI response", details: error.message });
    }
  });

  // API Route: Quick Prescription Upload & OCR analysis
  app.post("/api/analyze-prescription", async (req, res) => {
    const { image } = req.body;
    if (!image) {
      return res.status(400).json({ error: "Prescription image is required" });
    }

    if (!ai) {
      // Simulated intelligence response if Gemini Key is missing
      return res.json({
        analysis: `### 📋 Simulated Prescription Assessment (Offline Mode)
Thank you for uploading your prescription. To enable advanced AI prescription reading, please configure the **GEMINI_API_KEY** in the Secrets panel.

**Detected Elements:**
*   **Format**: Uploaded image file received.
*   **Aesthetic Status**: High contrast document layout.

**Suggested Store Actions:**
1.  **Immediate Availability Review**: We have received this document. Our certified pharmacist will manually inspect it.
2.  **Order Placement**: Simply click **"Send to WhatsApp"** on our order form to instantly transmit this file directly to our team at **09931075347**. We will package your products immediately for pickup or delivery.`
      });
    }

    try {
      let mimeType = "image/jpeg";
      let base64Data = image;
      
      if (image.startsWith("data:")) {
        const parts = image.split(";base64,");
        mimeType = parts[0].replace("data:", "");
        base64Data = parts[1];
      }

      const imagePart = {
        inlineData: {
          mimeType,
          data: base64Data,
        }
      };

      const promptPart = {
        text: `You are the chief pharmacist at Arogya Ayurved Bhandar. 
Please analyze this prescription image. 
Extract:
1. Medical practitioner / Hospital details if visible.
2. Patient name or date if visible.
3. List of readable medicines, syrups, supplements, or tablets.
4. Dosages, timings, and directions (e.g., 'twice daily after food', 'OD', 'BD').

Format the output beautifully with clear markdown headings, bold names, and clean bullet points. 
At the end, add a warning: "This AI-generated transcription is to assist your ordering convenience. Please verify with our store pharmacist during medicine collection."`
      };

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: { parts: [imagePart, promptPart] },
        config: {
          systemInstruction: "You are a specialized medical scribe and expert pharmacist. Transcribe clinical handwritings on prescriptions accurately and state clear names of medications, dosages, and safety remarks."
        }
      });

      res.json({ analysis: response.text });
    } catch (error: any) {
      console.error("Prescription analysis error:", error);
      res.status(500).json({ error: "Failed to analyze prescription", details: error.message });
    }
  });

  // Vite Integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
