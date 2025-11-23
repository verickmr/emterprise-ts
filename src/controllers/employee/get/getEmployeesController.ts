import { internalServerError, ok } from "../../helpers.ts";
import { IController } from "../../protocols.ts";
import { IGetEmployeesRepository } from "./protocols.ts";

export class GetEmployeesController implements IController {
  constructor(private readonly getEmployeesRepository: IGetEmployeesRepository) {}

  async handle() {
    try {
      const employees = await this.getEmployeesRepository.getEmployees();
      return ok(employees);
    } catch (error) {
      return internalServerError(error);
    }
  }
}
