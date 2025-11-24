import { Employee } from "../../../models/employee.ts";

export interface IGetEmployeesRepository {
  getEmployees(): Promise<Employee[]>;
}
