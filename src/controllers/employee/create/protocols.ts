import { Employee } from "../../../models/emploee.ts";
import { HttpResponse } from "../get/protocols.ts";

export interface createEmployeeParams {
  name: string;
  email: string;
  position: string;
  password: string;
  startDate: Date;
  endDate?: Date;
  status: "active" | "inactive";
}

export interface ICreateEmployeeController {
  handle(): Promise<HttpResponse<Employee[]>>;
}

export interface ICreateEmployeeRepository {
  createEmployee(params: createEmployeeParams): Promise<Employee>;
}
