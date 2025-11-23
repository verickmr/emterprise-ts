import express from "express";
import { config } from "dotenv";
import { GetCompaniesController } from "./controllers/company/get/getCompanyController.ts";
import { MongoClient } from "./database/mongo.ts";
import { GetCompaniesRepository } from "./repositories/getRepositories/GetCompaniesRepository.ts";
import { CreateCompanyRepository } from "./repositories/createRepositories/createCompanyRepository.ts";
import { CreateCompanyController } from "./controllers/company/create/createCompanyController.ts";

const main = async () => {
  config();
  const app = express();
  const PORT = process.env.PORT || 3000;

  await MongoClient.connect();

  app.get("/companies", async (req, res) => {
    const companyRepository = new GetCompaniesRepository();
    const companyController = new GetCompaniesController(companyRepository);

    const { body, statusCode } = await companyController.handle();

    return res.status(statusCode).send(body);
  });

  app.post("/companies", async (req, res) => {
    const companyRepository = new CreateCompanyRepository();
    const companyController = new CreateCompanyController(companyRepository);

    const { body, statusCode } = await companyController.handle({body: req.body});

    return res.status(statusCode).send(body);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();
