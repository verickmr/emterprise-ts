import express from "express";
import { config } from "dotenv";
import { GetCompaniesController } from "./controllers/company/get/getCompanyController.ts";
import { GetCompaniesRepository } from "./repositories/getRepositories/GetCompaniesRepository.ts";
import { CreateCompanyRepository } from "./repositories/createRepositories/createCompanyRepository.ts";
import { CreateCompanyController } from "./controllers/company/create/createCompanyController.ts";
import { UpdateCompanyRepository } from "./repositories/update/updateCompanyRepository.ts";
import { UpdateCompanyController } from "./controllers/company/update/updateCompanyController.ts";
import { DeleteCompanyRepository } from "./repositories/delete/deleteCompanyRepository.ts";
import { DeleteCompanyController } from "./controllers/company/delete/deleteCompanyController.ts";
import { connectToDatabase } from "./database/mongoose.ts";
import { GetEmployeesRepository } from "./repositories/employee/get/GetEmployeesRepository.ts";
import { GetEmployeesController } from "./controllers/employee/get/getEmployeesController.ts";
import { CreateEmployeeController } from "./controllers/employee/create/createEmployeeController.ts";
import { CreateEmployeeRepository } from "./repositories/employee/create/createEmploeeRepository.ts";
import { UpdateEmployeeController } from "./controllers/employee/update/updateEmployeeController.ts";
import { UpdateEmployeeRepository } from "./repositories/employee/update/updateEmployeeRepository.ts";
import { DeleteEmployeeController } from "./controllers/employee/delete/deleteEmployeeController.ts";
import { DeleteEmployeeRepository } from "./repositories/employee/delete/deleteEmployeeRepository.ts";

const main = async () => {
  config();
  const app = express();
  app.use(express.json());
  const PORT = process.env.PORT || 3000;

  await connectToDatabase();

  app.get("/companies", async (req, res) => {
    const companyRepository = new GetCompaniesRepository();
    const companyController = new GetCompaniesController(companyRepository);

    const { body, statusCode } = await companyController.handle();

    return res.status(statusCode).send(body);
  });

  app.get("/employees", async (req, res) => {
    const employeeRepository = new GetEmployeesRepository();
    const employeeController = new GetEmployeesController(employeeRepository);

    const { body, statusCode } = await employeeController.handle();

    return res.status(statusCode).send(body);
  });

  app.post("/companies", async (req, res) => {
    const companyRepository = new CreateCompanyRepository();
    const companyController = new CreateCompanyController(companyRepository);

    const { body, statusCode } = await companyController.handle({
      body: req.body,
    });

    return res.status(statusCode).send(body);
  });

  app.post("/employees", async (req, res) => {
    const employeeRepository = new CreateEmployeeRepository();
    const employeeController = new CreateEmployeeController(employeeRepository);

    const { body, statusCode } = await employeeController.handle({
      body: req.body,
    });

    return res.status(statusCode).send(body);
  });

  app.patch("/companies/:id", async (req, res) => {
    const companyRepository = new UpdateCompanyRepository();
    const companyController = new UpdateCompanyController(companyRepository);

    const { body, statusCode } = await companyController.handle({
      body: req.body,
    });

    return res.status(statusCode).send(body);
  });

  app.patch("/employees/:id", async (req, res) => {
    const employeeRepository = new UpdateEmployeeRepository();
    const employeeController = new UpdateEmployeeController(employeeRepository);

    const { body, statusCode } = await employeeController.handle({
      params: req.params,
      body: req.body,
    });

    return res.status(statusCode).send(body);
  });

  app.delete("/companies/:id", async (req, res) => {
    const companyRepository = new DeleteCompanyRepository();
    const companyController = new DeleteCompanyController(companyRepository);

    const { body, statusCode } = await companyController.handle({
      body: req.body,
    });

    return res.status(statusCode).send(body);
  });

  app.delete("/employees/:id", async (req, res) => {
    const employeeRepository = new DeleteEmployeeRepository();
    const employeeController = new DeleteEmployeeController(employeeRepository);

    const { body, statusCode } = await employeeController.handle({
      params: req.params,
    });

    return res.status(statusCode).send(body);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();
