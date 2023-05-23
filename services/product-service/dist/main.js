"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const db_1 = __importDefault(require("./db"));
const grpc_js_1 = require("@grpc/grpc-js");
const server_1 = require("./server");
const build_1 = require("@nodejs-microservices/protos/build");
const server = new grpc_js_1.Server();
const HOST = "0.0.0.0";
const PORT = 50051;
const address = `${HOST}:${PORT}`;
db_1.default
    .initialize()
    .then((db) => {
    server.addService(build_1.ProductServiceService, (0, server_1.getProductServer)(db));
    server.bindAsync(address, grpc_js_1.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            throw err;
        }
        console.log("Server is running on port: ", port);
        server.start();
    });
})
    .catch((err) => {
    console.error(err);
});
