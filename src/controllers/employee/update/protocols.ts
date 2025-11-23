import { Employee } from "../../../models/employee.ts";
import { HttpRequest, HttpResponse } from "../../protocols.ts";
import { z } from "zod";



export const updateEmployeeSchema = z.object({
    name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").optional(),
    email: z.string().email("Email inválido").optional(),
    position: z.string().optional(),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres").optional(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    status: z.enum(["active", "inactive"]).optional(),
  });
export type UpdateEmployeeParams = z.infer<typeof updateEmployeeSchema>;

export interface IUpdateEmployeeController {
  handle(
    httpRequest: HttpRequest<UpdateEmployeeParams>
  ): Promise<HttpResponse<Employee>>;
}

export interface IUpdateEmployeeRepository {
  updateEmployee(id: string, params: UpdateEmployeeParams): Promise<Employee>;
}
