import { Company } from "../../../models/company.ts";
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
      return {
        statusCode: 201,
        body: company,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: error,
      };
    }
  }
}
