import express from "express";
import { config } from "dotenv";
import { CompanyRepository } from "./repositories/companiesRepository.ts";
import { GetCompaniesController } from "./controllers/company/companyController.ts";
import { MongoClient } from "./database/mongo.ts";

const main = async () => {
  config();
  const app = express();
  const PORT = process.env.PORT || 3000;

  await MongoClient.connect();

  app.get("/companies", async (req, res) => {
    const companyRepository = new CompanyRepository();
    const companyController = new GetCompaniesController(companyRepository);

    const { body, statusCode } = await companyController.handle();

    return res.status(statusCode).send(body);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();
