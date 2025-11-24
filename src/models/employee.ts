import { Document, Schema } from "mongoose";
import { mongoose } from "../database/mongoose.ts";

export interface Employee extends Document{
    id: string
    name: string;
    email: string;
    position: string;
    password: string;
    startDate: Date;
    endDate?: Date;
    status: "active" | "inactive";
}

const EmployeeSchema = new Schema<Employee>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  password: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
});

export const EmployeeModel = mongoose.model<Employee>("Employee", EmployeeSchema);