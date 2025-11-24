import { Company } from "../../../models/company.ts";
import { internalServerError, ok } from "../../helpers.ts";
import { HttpRequest, HttpResponse, IController } from "../../protocols.ts";
import {
  IDeleteCompanyRepository,
} from "./protocols.ts";

export class DeleteCompanyController implements IController {
  constructor(
    private readonly deleteCompanyRepository: IDeleteCompanyRepository
  ) {}
  async handle(
    httpRequest: HttpRequest<{id: string}>
  ): Promise<HttpResponse<Company>> {
    try {
      const id = httpRequest?.params?.id

      const company =
        await this.deleteCompanyRepository.deleteCompany(id);
      return ok(company)
    } catch (error) {
      return internalServerError(error)
    }
  }
}
