import z from "zod";
import { Company } from "../../../models/company.ts";
import { HttpRequest, HttpResponse } from "../../protocols.ts";
import {
  UpdateCompanyParams,
  IUpdateCompanyController,
  IUpdateCompanyRepository,
  updateCompanySchema,
} from "./protocols.ts";

export class UpdateCompanyController implements IUpdateCompanyController {
  constructor(
    private readonly updateCompanyRepository: IUpdateCompanyRepository
  ) {}
  async handle(
    httpRequest: HttpRequest<UpdateCompanyParams>
  ): Promise<HttpResponse<Company>> {
    try {
      const id = httpRequest?.params?.id
      const validatedData = updateCompanySchema.parse(httpRequest.body);

      const company =
        await this.updateCompanyRepository.updateCompany(id, validatedData);
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
