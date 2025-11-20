import { Company } from "../../models/company.ts";
import { HttpResponse } from "../protocols.ts";


export interface IGetCompaniesController {
    handle(): Promise<HttpResponse<Company[]>>;
}

export interface IGetCompaniesRepository{
    getCompanies(): Promise<Company[]>
}