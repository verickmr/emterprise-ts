import z from "zod";
import { Employee } from "../../../models/employee.ts";
import { HttpRequest, HttpResponse, IController } from "../../protocols.ts";
import {
  UpdateEmployeeParams,
  IUpdateEmployeeRepository,
  updateEmployeeSchema,
} from "./protocols.ts";
import { badRequest, internalServerError, ok } from "../../helpers.ts";

export class UpdateEmployeeController implements IController {
  constructor(
    private readonly updateEmployeeRepository: IUpdateEmployeeRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<UpdateEmployeeParams>
  ): Promise<HttpResponse<Employee>> {

    try {
      const id = httpRequest.params?.id;

      if (!id) {
        return badRequest("Missing ID in params")
      }

      const validatedData = updateEmployeeSchema.parse(httpRequest.body);

      const employee =
        await this.updateEmployeeRepository.updateEmployee(id, validatedData);

      return ok(employee);

    } catch (error) {
      if (error instanceof z.ZodError) {
        return badRequest(error);
      }
      return internalServerError(error);
    }
  }
}
