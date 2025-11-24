import { Router } from "express";

import { GetEmployeesRepository } from "../repositories/employee/get/GetEmployeesRepository.ts";
import { GetEmployeesController } from "../controllers/employee/get/getEmployeesController.ts";

import { CreateEmployeeRepository } from "../repositories/employee/create/createEmploeeRepository.ts";
import { CreateEmployeeController } from "../controllers/employee/create/createEmployeeController.ts";

import { UpdateEmployeeRepository } from "../repositories/employee/update/updateEmployeeRepository.ts";
import { UpdateEmployeeController } from "../controllers/employee/update/updateEmployeeController.ts";

import { DeleteEmployeeRepository } from "../repositories/employee/delete/deleteEmployeeRepository.ts";
import { DeleteEmployeeController } from "../controllers/employee/delete/deleteEmployeeController.ts";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: CRUD de funcionários
 */

router.get("/", async (req, res) => {
  const repo = new GetEmployeesRepository();
  const controller = new GetEmployeesController(repo);
  const { statusCode, body } = await controller.handle();
  return res.status(statusCode).send(body);
});

router.get("/company/:id", async (req, res) => {
  const repo = new GetEmployeesRepository();
  const controller = new GetEmployeesController(repo);
  const { statusCode, body } = await controller.handle({
    params: req.params,
  });
  return res.status(statusCode).send(body);
});

router.post("/", async (req, res) => {
  const repo = new CreateEmployeeRepository();
  const controller = new CreateEmployeeController(repo);
  const { statusCode, body } = await controller.handle({
    body: req.body,
  });
  return res.status(statusCode).send(body);
});

router.patch("/:id", async (req, res) => {
  const repo = new UpdateEmployeeRepository();
  const controller = new UpdateEmployeeController(repo);
  const { statusCode, body } = await controller.handle({
    params: req.params,
    body: req.body,
  });
  return res.status(statusCode).send(body);
});

router.delete("/:id", async (req, res) => {
  const repo = new DeleteEmployeeRepository();
  const controller = new DeleteEmployeeController(repo);

  const { statusCode, body } = await controller.handle({
    params: req.params,
  });

  return res.status(statusCode).send(body);
});

export default router;
