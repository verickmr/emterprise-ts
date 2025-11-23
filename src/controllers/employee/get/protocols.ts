import { Employee } from "../../../models/emploee.ts";


export interface IGetEmployeesRepository {
  getEmployees(): Promise<Employee[]>;
}
