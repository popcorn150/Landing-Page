import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

console.log("MAIL_USER is:", process.env.MAIL_USER);

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
    origin: "https://barebonesnewsletter.vercel.app",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

app.post("/subscribe", async (req, res) => {
    console.log("📩 Incoming POST /subscribe with:", req.body);
    const { email, interest } = req.body;

    if (!email || !interest) {
        return res.status(400).json({ message: "Missing required fields." });
    }

    try {
        const { data, error } = await supabase.from("subscribers").insert([{ email, interest }]);
        console.log("📦 Inserting into Supabase:", { email, interest });
        if (error) {
            console.error("❌ Supabase Error:", error);
            return res.status(500).json({ message: "Supabase error: " + error.message });
        }
        console.log("✅ Supabase insert success:", data);


        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        let subject = "Welcome to BareBones Studio";
        let message = "";

        if (interest === "alpha") {
            subject = "Welcome to Alpha Routine";
            message = `Hey there!\n\nThanks for subscribing to the Alpha Routine.\n\nDownload your free routine here:\n👉 ${process.env.PDF_LINK}\n\nStay strong,\nBareBones Studio Team`;
        } else if (interest === "ghost") {
            subject = "Welcome to Ghost Project";
            message = `Hey there!\n\nThanks for subscribing to the Ghost Project.\n\nSubscribe to our YouTube channel here:\n👉 ${process.env.YOUTUBE_LINK}\n\nSee you on the other side,\nBareBones Studio Team`;
        } else if (interest === "both") {
            subject = "Welcome to Alpha + Ghost";
            message = `Hey there!\n\nThanks for subscribing to both Alpha Routine and Ghost Project.\n\nDownload your free guide here (includes our YouTube link):\n👉 ${process.env.PDF_LINK}\n\nLet's go,\nBareBones Studio Team`;
        }

        await transporter.sendMail({
            from: `BareBones Studio <${process.env.MAIL_USER}>`,
            to: email,
            subject,
            text: message,
        });

        res.status(200).json({ message: "Email sent!" });
    } catch (error) {
        console.error("Email error:", error);
        res.status(500).json({ message: "Failed to send email." });
    }
});

app.get("/", (req, res) => {
    res.send("🚀 BareBones Studio Backend is Live!");
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));