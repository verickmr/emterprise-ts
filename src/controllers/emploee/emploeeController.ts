import { IGetEmploeesController, IGetEmploeesRepository } from "./protocols.ts";

export class GetEmploeesController implements IGetEmploeesController {
    constructor(private readonly getEmploeesRepository: IGetEmploeesRepository){}

    async handle(){
        try {
            const emploees = await this.getEmploeesRepository.getEmploees()
            return{
            statuscode: 200,
            body: emploees,
            }
        } catch (error) {
            statuscode: 500,
            body: "Internal server error",            
        }
    }
}