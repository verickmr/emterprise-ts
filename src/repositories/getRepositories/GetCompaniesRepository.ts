import { IGetCompaniesRepository } from "../../controllers/company/protocols.ts";
import { MongoClient } from "../../database/mongo.ts";
import { Company } from "../../models/company.ts";

export class GetCompaniesRepository implements IGetCompaniesRepository{
    async getCompanies(): Promise<Company[]> {
        const companies = await MongoClient.db.collection<Omit<Company,"id">>("companies").find({}).toArray()
        return companies.map(({_id,...rest})=>({
            ...rest,
            id: _id.toHexString()
        }))
    }
}