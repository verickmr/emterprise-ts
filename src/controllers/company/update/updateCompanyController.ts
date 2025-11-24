import z from "zod";
import { Company } from "../../../models/company.ts";
import { HttpRequest, HttpResponse, IController } from "../../protocols.ts";
import {
  UpdateCompanyParams,
  IUpdateCompanyRepository,
  updateCompanySchema,
} from "./protocols.ts";
import { badRequest, internalServerError, ok } from "../../helpers.ts";

export class UpdateCompanyController implements IController
 {
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
      return ok(company)
    } catch (error) {
      if (error instanceof z.ZodError) {
        return badRequest(error)
      }
      return internalServerError(error)
    }
  }
}
