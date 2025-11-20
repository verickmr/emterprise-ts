import { IGetCompaniesController, IGetCompaniesRepository } from "./protocols.ts";

export class GetCompaniesController implements IGetCompaniesController {
    constructor(private readonly getCompaniesRepository: IGetCompaniesRepository){}

    async handle(){
        try {
            const companies = await this.getCompaniesRepository.getCompanies()
            return{
            statuscode: 200,
            body: companies,
            }
        } catch (error) {
            statuscode: 500,
            body: "Internal server error",            
        }
    }
}