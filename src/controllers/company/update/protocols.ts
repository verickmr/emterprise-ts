import { Company } from "../../../models/company.ts";
import { z } from "zod";

export const updateCompanySchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").optional(),
  cnpj: z.string().regex(/^\d{14}$/, "CNPJ deve ter 14 dígitos numéricos").optional(),
  email: z.string().email("Email inválido").optional(),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres").optional(),
});

export type UpdateCompanyParams = z.infer<typeof updateCompanySchema>;



export interface IUpdateCompanyRepository {
  updateCompany(id: string, params: UpdateCompanyParams): Promise<Company>;
}
