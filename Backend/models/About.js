import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  title: String,
  description: String,
  experienceYears: Number
});

export default mongoose.model("About", aboutSchema);
