import { z } from "zod";
import { Company } from "../../../models/company.ts";

export const createCompanySchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  cnpj: z.string().regex(/^\d{14}$/, "CNPJ deve ter 14 dígitos numéricos"),
  city: z.string().min(3, "Cidade deve ter no mínimo 3 caracteres"),
  sector: z.string().min(3, "Setor deve ter no mínimo 3 caracteres"),
});

export type CreateCompanyParams = z.infer<typeof createCompanySchema>;

export interface ICreateCompanyRepository {
  createCompany(params: CreateCompanyParams): Promise<Company>;
}
