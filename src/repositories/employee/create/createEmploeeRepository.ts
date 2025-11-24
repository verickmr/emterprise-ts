import {
  createEmployeeParams,
  ICreateEmployeeRepository,
} from "../../../controllers/employee/create/protocols.ts";
import { Employee, EmployeeModel } from "../../../models/employee.ts";

export class CreateEmployeeRepository implements ICreateEmployeeRepository {
  async createEmployee(params: createEmployeeParams): Promise<Employee> {
    const employeeDoc = await EmployeeModel.create(params);

    return {
      id: employeeDoc._id.toString(),
      name: employeeDoc.name,
      email: employeeDoc.email,
      position: employeeDoc.position,
      password: employeeDoc.password,
      startDate: employeeDoc.startDate,
      endDate: employeeDoc.endDate,
      status: employeeDoc.status,
    };
  }
}
