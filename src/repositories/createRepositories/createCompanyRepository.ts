import { MongoClient } from "mongodb"
import { Company } from "../../models/company.ts"
import { createCompanyParams, ICreateCompanyRepository } from "../../controllers/company/create/protocols.ts"

export class CreateCompanyRepository implements ICreateCompanyRepository{
    async createCompany(params: createCompanyParams): Promise<Company> {
        const {insertedId} = await MongoClient.db.collection("companies").insertOne(params)

        const company = await MongoClient.db.collection<Omit<Company,"id">>("companies").findOne({_id: insertedId})
         
        if(!company){
            throw new Error("Company not found")
        }   

        const {_id, ...rest} = company

        return {
            id: _id.toHexString(),
            ...rest
        }
    }
}