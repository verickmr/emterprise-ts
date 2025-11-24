import express from "express";
import { config } from "dotenv";
import { connectToDatabase } from "./database/mongoose.ts";


import companyRoutes from "./routes/company.routes.ts";
import employeeRoutes from "./routes/employee.routes.ts";

const main = async () => {
  config();
  const app = express();
  app.use(express.json());

  await connectToDatabase();

  app.use("/companies", companyRoutes);
  app.use("/employees", employeeRoutes);

  app.listen(process.env.PORT, () =>
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
  );
};

main();
