import { IUpdateEmployeeRepository, UpdateEmployeeParams } from "../../../controllers/employee/update/protocols.ts";
import { Employee, EmployeeModel } from "../../../models/employee.ts";

export class UpdateEmployeeRepository implements IUpdateEmployeeRepository {
  async updateEmployee(id: string, params: UpdateEmployeeParams): Promise<Employee> {
    
    const updated = await EmployeeModel.findByIdAndUpdate(
      id,
      { $set: params },
      { new: true } 
    ).lean();

    if (!updated) {
      throw new Error("Employee not found");
    }

    return {
      id: updated._id.toString(),
      name: updated.name,
      email: updated.email,
      position: updated.position,
      password: updated.password,
      startDate: updated.startDate,
      endDate: updated.endDate,
      status: updated.status,
    };
  }
}
