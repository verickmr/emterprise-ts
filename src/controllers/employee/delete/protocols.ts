import { Employee } from "../../../models/employee.ts";






export interface IDeleteEmployeeRepository {
  deleteEmployee(id: string): Promise<Employee>;
}
