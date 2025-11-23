import z from "zod";
import { Employee } from "../../../models/employee.ts";
import { HttpRequest, HttpResponse } from "../../protocols.ts";
import {
  UpdateEmployeeParams,
  IUpdateEmployeeController,
  IUpdateEmployeeRepository,
  updateEmployeeSchema,
} from "./protocols.ts";

export class UpdateEmployeeController implements IUpdateEmployeeController {
  constructor(
    private readonly updateEmployeeRepository: IUpdateEmployeeRepository
  ) {}
  async handle(
    httpRequest: HttpRequest<UpdateEmployeeParams>
  ): Promise<HttpResponse<Employee>> {
    try {
      const id = httpRequest?.params?.id
      const validatedData = updateEmployeeSchema.parse(httpRequest.body);

      const employee =
        await this.updateEmployeeRepository.updateEmployee(id, validatedData);
      return {
        statusCode: 201,
        body: employee,
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { statusCode: 400, body: error.format() };
      }
      return {
        statusCode: 500,
        body: error,
      };
    }
  }
}
