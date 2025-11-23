import z from "zod";
import { Company } from "../../../models/company.ts";
import { HttpRequest, HttpResponse, IController } from "../../protocols.ts";
import {
  CreateCompanyParams,
  createCompanySchema,
  ICreateCompanyRepository,
} from "./protocols.ts";

export class CreateCompanyController implements IController {
  constructor(
    private readonly createCompanyRepository: ICreateCompanyRepository
  ) {}
  async handle(
    httpRequest: HttpRequest<CreateCompanyParams>
  ): Promise<HttpResponse<Company>> {
    try {
      const validatedData = createCompanySchema.parse(httpRequest.body);

      const company =
        await this.createCompanyRepository.createCompany(validatedData);
      return {
        statusCode: 201,
        body: company,
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
