import mongoose from "mongoose";

const caseStudySchema = new mongoose.Schema({
  title: String,
  summary: String,
  result: String
});

export default mongoose.model("CaseStudy", caseStudySchema);
