import { IDeleteEmployeeRepository } from "../../../controllers/employee/delete/protocols.ts";
import { Employee, EmployeeModel } from "../../../models/employee.ts";


export class DeleteEmployeeRepository implements IDeleteEmployeeRepository {
  async deleteEmployee(id: string): Promise<Employee> {

    const employee = await EmployeeModel.findById(id).lean();

    if (!employee) {
      throw new Error("Employee not found");
    }

    await EmployeeModel.findByIdAndDelete(id);

    return {
      id: employee._id.toString(),
      name: employee.name,
      email: employee.email,
      position: employee.position,
      password: employee.password,
      startDate: employee.startDate,
      endDate: employee.endDate,
      status: employee.status,
    };
  }
}
