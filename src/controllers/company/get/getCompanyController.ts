import { internalServerError, ok } from "../../helpers.ts";
import { IController } from "../../protocols.ts";
import { IGetCompaniesRepository } from "../protocols.ts";

export class GetCompaniesController implements IController {
    constructor(private readonly getCompaniesRepository: IGetCompaniesRepository){}

    async handle(){
        try {
            const companies = await this.getCompaniesRepository.getCompanies()
            return ok(companies)
        } catch (error) {
            return internalServerError(error)
        }
    }
}