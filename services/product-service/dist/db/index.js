"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const product_model_1 = require("../models/product.model");
const dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "silvousplait123",
    database: "grpc_product",
    entities: [product_model_1.Product],
    logging: true,
    synchronize: true,
});
exports.default = dataSource;
