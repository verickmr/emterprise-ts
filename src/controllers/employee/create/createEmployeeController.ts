import z from "zod";
import { Employee } from "../../../models/employee.ts";
import { HttpRequest, HttpResponse } from "../../protocols.ts";
import {
  createEmployeeParams,
  ICreateEmployeeController,
  ICreateEmployeeRepository,
} from "./protocols.ts";

export class CreateEmployeeController implements ICreateEmployeeController {
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
