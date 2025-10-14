import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/db.js";

import aboutRoutes from "./routes/aboutRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import caseStudyRoutes from "./routes/caseStudyRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

// API routes
app.use("/api/about", aboutRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/case-studies", caseStudyRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
