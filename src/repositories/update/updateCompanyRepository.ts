import { IUpdateCompanyRepository, UpdateCompanyParams } from "../../controllers/company/update/protocols.ts";
import { Company } from "../../models/company.ts";
import { MongoClient } from "../../database/mongo.ts";
import { ObjectId } from "mongodb";

export class UpdateCompanyRepository implements IUpdateCompanyRepository{
    async updateCompany(id: string, params: UpdateCompanyParams): Promise<Company>{
        await MongoClient.db.collection<Omit<Company,"id">>("companies").updateOne({_id: new ObjectId(id)}, {$set: {...params}})

        const company = await MongoClient.db.collection<Omit<Company,"id">>("companies").findOne({_id: new ObjectId(id)})

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