import { IDeleteCompanyRepository } from "../../controllers/company/delete/protocols.ts";
import { Company } from "../../models/company.ts";
import { MongoClient } from "../../database/mongo.ts";
import { ObjectId } from "mongodb";

export class DeleteCompanyRepository implements IDeleteCompanyRepository{
    async deleteCompany(id: string): Promise<Company>{
        const company =await MongoClient.db.collection<Omit<Company,"id">>("companies").findOne({_id: new ObjectId(id)})

        if(!company){
            throw new Error("Company not found")
        }
        const {deletedCount} = await MongoClient.db.collection<Omit<Company,"id">>("companies").deleteOne({_id: new ObjectId(id)})

        if(!deletedCount){
            throw new Error("Company not deleted")
        }

        const {_id, ...rest} = company

        return {
            id: _id.toHexString(),
            ...rest
        }
    }
}