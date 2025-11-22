import { Employee } from "../../../models/emploee.ts";
import { HttpResponse } from "../protocols.ts";

export interface createEmployeeParams {
    name: string;
    email: string;
    position: string;
    password: string;
    startDate: Date;
    endDate?: Date;
    status: "active" | "inactive";
}

export interface ICreateCompanyController {
    handle(): Promise<HttpResponse<Employee[]>>;
}

export interface ICreateCompanyRepository{
    createEmployee(params: createEmployeeParams): Promise<Employee>
}