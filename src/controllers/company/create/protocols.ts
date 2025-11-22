import { Company } from "../../models/company.ts";
import { HttpResponse } from "../protocols.ts";

export interface createCompanyParams {
    name: string;
    cnpj: string;
    email: string;
    password: string;
}

export interface ICreateCompanyController {
    handle(): Promise<HttpResponse<Company[]>>;
}

export interface ICreateCompanyRepository{
    createCompany(params: createCompanyParams): Promise<Company>
}