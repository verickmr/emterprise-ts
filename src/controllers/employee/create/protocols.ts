import { Employee } from "../../../models/employee.ts";
import { z } from "zod";

export const createEmployeeSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("Email inválido"),
  position: z.string().min(2, "Cargo inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  startDate: z.coerce.date({
    errorMap: () => ({ message: "startDate deve ser uma data" }),
  }),
  endDate: z
    .coerce.date({
      errorMap: () => ({ message: "endDate deve ser uma data" }),
    })
    .optional(),
  status: z.enum(["active", "inactive"], {
    errorMap: () => ({ message: "Status deve ser active ou inactive" }),
  }),
  companyId: z.string().min(1, "Informe o ID da empresa"),
});

export type createEmployeeParams = z.infer<typeof createEmployeeSchema>;

export interface ICreateEmployeeRepository {
  createEmployee(params: createEmployeeParams): Promise<Employee>;
}
