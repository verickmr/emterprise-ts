import z from "zod";
import { HttpRequest, HttpResponse, IController } from "../../protocols.ts";
import {
  createEmployeeParams,
  createEmployeeSchema,
  ICreateEmployeeRepository,
} from "./protocols.ts";
import { ok, badRequest, internalServerError } from "../../helpers.ts";
import { Employee } from "../../../models/employee.ts";

export class CreateEmployeeController implements IController {
  constructor(
    private readonly createEmployeeRepository: ICreateEmployeeRepository
  ) {}
  async handle(
    httpRequest: HttpRequest<createEmployeeParams>
  ): Promise<HttpResponse<Employee>> {
    try {
      const validatedData = createEmployeeSchema.parse(httpRequest.body);

      const employee =
        await this.createEmployeeRepository.createEmployee(validatedData);
      return ok(employee);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return badRequest(error.format());
      }
      return internalServerError(error);
    }
  }
}
