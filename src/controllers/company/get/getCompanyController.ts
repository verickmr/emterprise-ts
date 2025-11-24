import { internalServerError, ok } from "../../helpers.ts";
import { IController } from "../../protocols.ts";
import { IGetCompanyRepository } from "../protocols.ts";

export class GetCompanyController implements IController {
    constructor(private readonly getCompanyRepository: IGetCompanyRepository){}

    async handle(){
        try {
            const company = await this.getCompanyRepository.getCompany()
            return ok(company)
        } catch (error) {
            return internalServerError(error)
        }
    }
}