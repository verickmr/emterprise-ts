import { ICreateCompanyRepository } from "../../../controllers/company/create/protocols.ts";
import { Company, CompanyModel } from "../../../models/company.ts";
import { CreateCompanyParams } from "../../../controllers/company/create/protocols.ts";

export class CreateCompanyRepository implements ICreateCompanyRepository {
  async createCompany(params: CreateCompanyParams): Promise<Company> {
    const CompanyDoc = await CompanyModel.create(params);

    return {
      id: CompanyDoc.id,
      name: CompanyDoc.name,
      sector: CompanyDoc.sector,
      cnpj: CompanyDoc.cnpj,
      city: CompanyDoc.city,
    };
  }
}
