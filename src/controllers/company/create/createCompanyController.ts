import z from "zod";
import { Company } from "../../../models/company.ts";
import { HttpRequest, HttpResponse, IController } from "../../protocols.ts";
import {
  CreateCompanyParams,
  createCompanySchema,
  ICreateCompanyRepository,
} from "./protocols.ts";
import { badRequest, created, internalServerError } from "../../helpers.ts";

export class CreateCompanyController implements IController {
  constructor(
    private readonly createCompanyRepository: ICreateCompanyRepository
  ) {}
  async handle(
    httpRequest: HttpRequest<CreateCompanyParams>
  ): Promise<HttpResponse<Company | z.ZodFormattedError<unknown, string>>> {
    try {
      const validatedData = createCompanySchema.parse(httpRequest.body);

      const company =
        await this.createCompanyRepository.createCompany(validatedData);
      return created(company)
    } catch (error) {
      if (error instanceof z.ZodError) {
        return badRequest(error)
      }
      return internalServerError(error)
    }
  }
}
