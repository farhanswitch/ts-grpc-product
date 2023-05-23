"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductServer = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const index_1 = require("@nodejs-microservices/protos/build/index");
const ProductController = __importStar(require("./controllers/product.controller"));
function getProductServer(db) {
    function createProduct(call, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield ProductController.createProduct(db, call.request);
                const productPB = index_1.Product.fromJSON(product);
                const response = {
                    product: productPB,
                };
                callback(null, response);
            }
            catch (error) {
                console.error(error);
                callback({ code: grpc_js_1.status.INTERNAL }, null);
            }
        });
    }
    function getProduct(call, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            callback({ code: grpc_js_1.status.UNIMPLEMENTED }, null);
        });
    }
    function listProducts(call, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            callback({ code: grpc_js_1.status.UNIMPLEMENTED }, null);
        });
    }
    return {
        createProduct,
        getProduct,
        listProducts,
    };
}
exports.getProductServer = getProductServer;
