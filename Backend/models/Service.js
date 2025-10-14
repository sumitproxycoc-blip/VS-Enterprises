import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: String,
  details: String
});

export default mongoose.model("Service", serviceSchema);
