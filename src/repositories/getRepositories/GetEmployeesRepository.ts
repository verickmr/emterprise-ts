import { IGetEmployeesRepository } from "../../controllers/Employee/get/protocols.ts";
import { EmployeeModel } from "../../models/emploee.ts";
import { Employee } from "../../models/emploee.ts";

export class GetEmployeesRepository implements IGetEmployeesRepository {
  async getEmployees(): Promise<Employee[]> {
    const employees = await EmployeeModel.find().lean();

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
