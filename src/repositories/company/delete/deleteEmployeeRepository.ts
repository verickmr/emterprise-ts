import { IDeleteCompanyRepository } from "../../../controllers/company/delete/protocols.ts";
import { Company, CompanyModel } from "../../../models/company.ts";


export class DeleteCompanyRepository implements IDeleteCompanyRepository {
  async deleteCompany(id: string): Promise<Company> {

    const company = await CompanyModel.findById(id).lean();

    if (!company) {
      throw new Error("Company not found");
    }

    await CompanyModel.findByIdAndDelete(id);

    return {
      id: company._id.toString(),
      name: company.name,
      cnpj: company.cnpj,
      city: company.city,
      sector: company.sector,
    };
  }
}
