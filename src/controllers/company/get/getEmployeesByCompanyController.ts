import { ok } from "assert";
import { Employee } from "../../../models/employee.ts";
import { badRequest, internalServerError } from "../../helpers.ts";
import { IController, HttpRequest, HttpResponse } from "../../protocols.ts";
import { IGetEmployeesByCompanyRepository } from "./protocols.ts";


export class GetEmployeesByCompanyController implements IController {
  constructor(
    private readonly getCompanyEmployeesRepository: IGetEmployeesByCompanyRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<{ companyId: string }>
  ): Promise<HttpResponse<Employee[]>> {
    try {
      const companyId = httpRequest.params?.companyId;

      if (!companyId) {
        return badRequest("companyId não informado");
      }

      const employees =
        await this.getCompanyEmployeesRepository.getEmployeesByCompany(companyId);

      return ok(employees);

    } catch (error) {
      return internalServerError(error);
    }
  }
}
