import { Company } from "../../../models/company.ts";






export interface IDeleteCompanyRepository {
  deleteCompany(id: string): Promise<Company>;
}
