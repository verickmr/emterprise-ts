import { Employee } from "../../../models/employee.ts";
import { badRequest, internalServerError, ok } from "../../helpers.ts";
import { HttpRequest, HttpResponse, IController } from "../../protocols.ts";
import { IDeleteEmployeeRepository } from "./protocols.ts";

export class DeleteEmployeeController implements IController {
  constructor(
    private readonly deleteEmployeeRepository: IDeleteEmployeeRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<{ id: string }>
  ): Promise<HttpResponse<Employee>> {
    try {
      const id = httpRequest.params?.id;

      if (!id) badRequest("Missing ID in params")

      const employee =
        await this.deleteEmployeeRepository.deleteEmployee(id);

      return ok(employee)

    } catch (error) {
      return internalServerError(error)
    }
  }
}
