import { MongoClient } from "mongodb"
import { Employee } from "../../models/Employee.ts"
import { createEmployeeParams, ICreateEmployeeRepository } from "../../controllers/Employee/create/protocols.ts"

export class CreateEmployeeRepository implements ICreateEmployeeRepository{
    async createEmployee(params: createEmployeeParams): Promise<Employee> {
        const {insertedId} = await MongoClient.db.collection("employees").insertOne(params)

        const employee = await MongoClient.db.collection<Omit<Employee,"id">>("employees").findOne({_id: insertedId})
         
        if(!employee){
            throw new Error("Employee not found")
        }   

        const {_id, ...rest} = employee

        return {
            id: _id.toHexString(),
            ...rest
        }
    }
}