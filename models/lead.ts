import mongoose, { Schema, Document } from "mongoose";

export interface ILead extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  // New interface properties
  domain: string;
  candidates: number;
  deliveryMode: string;
  location: string;
  createdAt: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String, required: true },
    // New schema properties
    domain: { type: String, required: true },
    candidates: { type: Number, required: true },
    deliveryMode: { type: String, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

// Using the || operator prevents model recompilation errors during hot reloading in development
const Lead = mongoose.models.Lead || mongoose.model<ILead>("Lead", LeadSchema);

export default Lead;