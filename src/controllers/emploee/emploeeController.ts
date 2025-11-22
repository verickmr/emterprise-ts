import { IGetEmploeesController, IGetEmploeesRepository } from "./protocols.ts";

export class GetEmploeesController implements IGetEmploeesController {
    constructor(private readonly getEmploeesRepository: IGetEmploeesRepository){}

    async handle(){
        try {
            const emploees = await this.getEmploeesRepository.getEmploees()
            return{
            statusCode: 200,
            body: emploees,
            }
        } catch (error) {
            return{
            statusCode: 500,
            body: error,            
        }}
    }
}