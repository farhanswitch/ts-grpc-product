import { sendUnaryData, ServerUnaryCall, status } from "@grpc/grpc-js";
import {
  CreateProductRequest,
  CreateProductResponse,
  GetProductRequest,
  GetProductResponse,
  ListProductsRequest,
  ListProductsResponse,
  ProductServiceServer,
  Product,
} from "@nodejs-microservices/protos/build/index";

import * as ProductController from "./controllers/product.controller";

import { DataSource } from "typeorm";

export function getProductServer(db: DataSource): ProductServiceServer {
  async function createProduct(
    call: ServerUnaryCall<CreateProductRequest, CreateProductResponse>,
    callback: sendUnaryData<CreateProductResponse>
  ) {
    try {
      const product = await ProductController.createProduct(db, call.request);
      const productPB = Product.fromJSON(product);
      const response: CreateProductResponse = {
        product: productPB,
      };
      callback(null, response);
    } catch (error) {
      console.error(error);
      callback({ code: status.INTERNAL }, null);
    }
  }
  async function getProduct(
    call: ServerUnaryCall<GetProductRequest, GetProductResponse>,
    callback: sendUnaryData<GetProductResponse>
  ) {
    callback({ code: status.UNIMPLEMENTED }, null);
  }
  async function listProducts(
    call: ServerUnaryCall<ListProductsRequest, ListProductsResponse>,
    callback: sendUnaryData<ListProductsResponse>
  ) {
    callback({ code: status.UNIMPLEMENTED }, null);
  }

  return {
    createProduct,
    getProduct,
    listProducts,
  };
}
