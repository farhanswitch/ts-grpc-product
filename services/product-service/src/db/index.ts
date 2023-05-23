import { DataSource } from "typeorm";
import { Product } from "../models/product.model";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "silvousplait123",
  database: "grpc_product",
  entities: [Product],
  logging: true,
  synchronize: true,
});

export default dataSource;
