import "reflect-metadata";
import dataSource from "./db";
import { Server, ServerCredentials } from "@grpc/grpc-js";
import { getProductServer } from "./server";
import { ProductServiceService } from "@nodejs-microservices/protos/build";

const server = new Server();

const HOST = "0.0.0.0";
const PORT = 50051;

const address = `${HOST}:${PORT}`;

dataSource
  .initialize()
  .then((db) => {
    server.addService(ProductServiceService, getProductServer(db));
    server.bindAsync(
      address,
      ServerCredentials.createInsecure(),
      (err, port) => {
        if (err) {
          throw err;
        }
        console.log("Server is running on port: ", port);
        server.start();
      }
    );
  })
  .catch((err) => {
    console.error(err);
  });
