import { IGetCompanyRepository } from "../../../controllers/company/get/protocols.ts";
import { CompanyModel } from "../../../models/company.ts";
import { Company } from "../../../models/company.ts";

export class GetCompanyRepository implements IGetCompanyRepository {
  async getCompany(id: string): Promise<Company> {
    const c = await CompanyModel.findById(id).lean();

    if (!c) {
      throw new Error("Company not found");
    }

    return {
      id: c._id.toString(),
      name: c.name,
      sector: c.sector,
      cnpj: c.cnpj,
      city: c.city,
    };
  }
}
