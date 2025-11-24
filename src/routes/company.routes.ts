import { Router } from "express";

import { GetCompaniesRepository } from "../repositories/company/get/getCompaniesRepository.ts";
import { GetCompaniesController } from "../controllers/company/get/getCompaniesComtroller.ts";

import { CreateCompanyRepository } from "../repositories/company/create/createCompanyRepository.ts";
import { CreateCompanyController } from "../controllers/company/create/createCompanyController.ts";

import { UpdateCompanyRepository } from "../repositories/company/update/updateCompanyRepository.ts";
import { UpdateCompanyController } from "../controllers/company/update/updateCompanyController.ts";

import { DeleteCompanyRepository } from "../repositories/company/delete/deleteEmployeeRepository.ts";
import { DeleteCompanyController } from "../controllers/company/delete/deleteCompanyController.ts";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Companies
 *   description: CRUD de empresas
 */

router.get("/", async (req, res) => {
  const repo = new GetCompaniesRepository();
  const controller = new GetCompaniesController(repo);
  const { statusCode, body } = await controller.handle();
  return res.status(statusCode).send(body);
});

router.get("/:id", async (req, res) => {
  const repo = new GetCompaniesRepository();
  const controller = new GetCompaniesController(repo);
  const { statusCode, body } = await controller.handle({
    params: req.params,
  });
  return res.status(statusCode).send(body);
});

router.get("/:id/employees", async (req, res) => {
  const repo = new GetCompaniesRepository();
  const controller = new GetCompaniesController(repo);
  const { statusCode, body } = await controller.handle({
    params: req.params,
  });
  return res.status(statusCode).send(body);
});

router.post("/", async (req, res) => {
  const repo = new CreateCompanyRepository();
  const controller = new CreateCompanyController(repo);
  const { statusCode, body } = await controller.handle({ body: req.body });
  return res.status(statusCode).send(body);
});

router.patch("/:id", async (req, res) => {
  const repo = new UpdateCompanyRepository();
  const controller = new UpdateCompanyController(repo);
  const { statusCode, body } = await controller.handle({
    params: req.params,
    body: req.body,
  });
  return res.status(statusCode).send(body);
});

router.delete("/:id", async (req, res) => {
  const repo = new DeleteCompanyRepository();
  const controller = new DeleteCompanyController(repo);
  const { statusCode, body } = await controller.handle({
    params: req.params,
  });
  return res.status(statusCode).send(body);
});

export default router;
