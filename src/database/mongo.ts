import { log } from "console";
import { MongoClient as MC, Db} from "mongodb";
export const MongoClient = {
    client: undefined as unknown as MC,
    db:undefined as unknown as Db,

    async connect(): Promise<void>{
        const url = process.env.MONGODB_URL || "localhost:27017";
        const username = process.env.MONGODB_USERNAME;
        const password = process.env.MONGODB_PASSWORD;

        const client = new MC(url,{auth:{username,password}})
        const db = client.db("emterprise")

        this.client =client;
        this.db = db
        log("Connected to MongoDB");
    }

}