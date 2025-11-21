import express from "express";
import { config } from "dotenv";
import { CompanyRepository } from "./repositories/companiesRepository.ts";
import { GetCompaniesController } from "./controllers/company/comparnyController.ts";
import { MongoClient } from "./database/mongo.ts";

const main = async () => {
  config();
  const app = express();
  const PORT = process.env.PORT || 3000;
  await MongoClient.connect();
  app.get("/companies", async (req, res) => {
    const companyRepository = new CompanyRepository();
    const companyContoller = new GetCompaniesController(companyRepository);
    const { body, statusCode } = await companyContoller.handle();
    res.send(body).status(statusCode);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
main();
