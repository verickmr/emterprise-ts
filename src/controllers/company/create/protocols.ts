import { Company } from "../../models/company.ts";
import { HttpRequest, HttpResponse } from "../../protocols.ts";
import { z } from "zod";

export const createCompanySchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  cnpj: z.string().regex(/^\d{14}$/, "CNPJ deve ter 14 dígitos numéricos"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export type CreateCompanyParams = z.infer<typeof createCompanySchema>;

export interface ICreateCompanyController {
  handle(
    httpRequest: HttpRequest<CreateCompanyParams>
  ): Promise<HttpResponse<Company>>;
}

export interface ICreateCompanyRepository {
  createCompany(params: CreateCompanyParams): Promise<Company>;
}
