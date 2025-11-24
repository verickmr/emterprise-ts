import { EmployeeModel } from "../../../models/employee.ts";
import { Employee } from "../../../models/employee.ts";
import { IGetEmployeesByCompanyRepository } from "../../../controllers/company/get/protocols.ts";

export class GetEmployeesByCompanyRepository implements IGetEmployeesByCompanyRepository {
  async getEmployeesByCompany(companyId: string): Promise<Employee[]> {
    const employees = await EmployeeModel.find({ companyId }).lean();

    return employees.map((c) => ({
      id: c._id.toString(),
      name: c.name,
      email: c.email,
      position: c.position,
      password: c.password,
      startDate: c.startDate,
      endDate: c.endDate,
      status: c.status,
    }));
  }
}
