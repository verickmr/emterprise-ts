import express from "express";
import { config } from "dotenv";
import { connectToDatabase } from "./database/mongoose.ts";
import companyRoutes from "./routes/company.routes.ts";
import employeeRoutes from "./routes/employee.routes.ts";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

const main = async () => {
  config();
  const app = express();
  app.use(express.json());

  await connectToDatabase();

  app.use("/companies", companyRoutes);
  app.use("/employees", employeeRoutes);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.listen(process.env.PORT, () =>
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
  );
};

main();
