import  { Document, Schema } from "mongoose";
import { mongoose } from "../database/mongoose.ts";

export interface Company extends Document {
    id: string
    name: string;
    sector: string;
    cnpj: string;
    city: string;
}

const CompanySchema = new Schema<Company>({
  name: { type: String, required: true },
  sector: { type: String, required: true },
  cnpj: { type: String, required: true },
  city: { type: String, required: true },
});

export const CompanyModel = mongoose.model<Company>("Company", CompanySchema);