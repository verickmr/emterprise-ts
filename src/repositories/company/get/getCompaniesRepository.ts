import { IGetCompaniesRepository } from "../../../controllers/company/get/protocols.ts";
import { CompanyModel } from "../../../models/company.ts";
import { Company } from "../../../models/company.ts";

export class GetCompaniesRepository implements IGetCompaniesRepository {
  async getCompanies(): Promise<Company[]> {
    const companies = await CompanyModel.find().lean();

    return companies.map((c) => ({
      id: c._id.toString(),
      name: c.name,
      sector: c.sector,
      cnpj: c.cnpj,
      city: c.city,
    }));
  }
}
