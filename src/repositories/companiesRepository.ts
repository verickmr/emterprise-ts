import { IGetCompaniesRepository } from "../controllers/company/protocols.ts";
import { Company } from "../models/company.ts";

export class CompanyRepository implements IGetCompaniesRepository{
    async getCompanies(): Promise<Company[]> {
        return{
            name: "Empresa X",
            sector: "Tech",
            city: "JP",
            cnpj: "00.000.000/0001-00"
        }
    }
}