import { Company } from "../../models/company.ts";
import { z } from "zod";

export const createCompanySchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  cnpj: z.string().regex(/^\d{14}$/, "CNPJ deve ter 14 dígitos numéricos"),
  email: z.string().email("Email inválido"),
});

export type CreateCompanyParams = z.infer<typeof createCompanySchema>;

export interface ICreateCompanyRepository {
  createCompany(params: CreateCompanyParams): Promise<Company>;
}
