import { Company } from "../../../models/company.ts";
import { Employee } from "../../../models/employee.ts";

export interface IGetEmployeesByCompanyRepository {
  getEmployeesByCompany(companyId: string): Promise<Employee[]>;
}

export interface IGetCompaniesRepository {
  getCompanies(): Promise<Company[]>;
}

export interface IGetCompanyRepository {
  getCompany(id: string): Promise<Company>;
}


