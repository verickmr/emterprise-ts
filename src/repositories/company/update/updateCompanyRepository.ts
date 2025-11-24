import { IUpdateCompanyRepository, UpdateCompanyParams } from "../../../controllers/company/update/protocols.ts";
import { Company, CompanyModel } from "../../../models/company.ts";

export class UpdateCompanyRepository implements IUpdateCompanyRepository {
  async updateCompany(id: string, params: UpdateCompanyParams): Promise<Company> {
    
    const updated = await CompanyModel.findByIdAndUpdate(
      id,
      { $set: params },
      { new: true } 
    ).lean();

    if (!updated) {
      throw new Error("Company not found");
    }

    return {
      id: updated._id.toString(),
      name: updated.name,
      cnpj: updated.cnpj,
      city: updated.city,
      sector: updated.sector,
    };
  }
}
