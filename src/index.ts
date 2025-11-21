import express from "express";
import { config } from "dotenv";
import { CompanyRepository } from "./repositories/companiesRepository.ts";
import { GetCompaniesController } from "./controllers/company/comparnyController.ts";

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/companies", async(req, res) => {
  const companyRepository = new CompanyRepository();
  const companyContoller = new GetCompaniesController(companyRepository)
  const {body, statusCode} = await companyContoller.handle()
  res.send(body).status(statusCode)
  
});
