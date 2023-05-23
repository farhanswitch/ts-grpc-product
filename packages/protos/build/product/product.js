"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServiceClient = exports.ProductServiceService = exports.ListProductsResponse = exports.ListProductsRequest = exports.GetProductResponse = exports.GetProductRequest = exports.CreateProductResponse = exports.CreateProductRequest = exports.Product = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../google/protobuf/timestamp");
exports.protobufPackage = "product";
function createBaseProduct() {
    return { id: 0, name: "", description: "", image: "", tags: [], createdAt: undefined, updatedAt: undefined };
}
exports.Product = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.image !== "") {
            writer.uint32(34).string(message.image);
        }
        for (const v of message.tags) {
            writer.uint32(42).string(v);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProduct();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.image = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.tags.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? Number(object.id) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            image: isSet(object.image) ? String(object.image) : "",
            tags: Array.isArray(object === null || object === void 0 ? void 0 : object.tags) ? object.tags.map((e) => String(e)) : [],
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.image !== undefined && (obj.image = message.image);
        if (message.tags) {
            obj.tags = message.tags.map((e) => e);
        }
        else {
            obj.tags = [];
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.Product.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseProduct();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.image = (_d = object.image) !== null && _d !== void 0 ? _d : "";
        message.tags = ((_e = object.tags) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.createdAt = (_f = object.createdAt) !== null && _f !== void 0 ? _f : undefined;
        message.updatedAt = (_g = object.updatedAt) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
function createBaseCreateProductRequest() {
    return { name: "", description: "", image: "", tags: [] };
}
exports.CreateProductRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.image !== "") {
            writer.uint32(26).string(message.image);
        }
        for (const v of message.tags) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateProductRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.image = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.tags.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            image: isSet(object.image) ? String(object.image) : "",
            tags: Array.isArray(object === null || object === void 0 ? void 0 : object.tags) ? object.tags.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.image !== undefined && (obj.image = message.image);
        if (message.tags) {
            obj.tags = message.tags.map((e) => e);
        }
        else {
            obj.tags = [];
        }
        return obj;
    },
    create(base) {
        return exports.CreateProductRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCreateProductRequest();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.image = (_c = object.image) !== null && _c !== void 0 ? _c : "";
        message.tags = ((_d = object.tags) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
function createBaseCreateProductResponse() {
    return { product: undefined };
}
exports.CreateProductResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.product !== undefined) {
            exports.Product.encode(message.product, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateProductResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.product = exports.Product.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { product: isSet(object.product) ? exports.Product.fromJSON(object.product) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.product !== undefined && (obj.product = message.product ? exports.Product.toJSON(message.product) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateProductResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateProductResponse();
        message.product = (object.product !== undefined && object.product !== null)
            ? exports.Product.fromPartial(object.product)
            : undefined;
        return message;
    },
};
function createBaseGetProductRequest() {
    return { id: 0 };
}
exports.GetProductRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetProductRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    create(base) {
        return exports.GetProductRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetProductRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseGetProductResponse() {
    return { product: undefined };
}
exports.GetProductResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.product !== undefined) {
            exports.Product.encode(message.product, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetProductResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.product = exports.Product.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { product: isSet(object.product) ? exports.Product.fromJSON(object.product) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.product !== undefined && (obj.product = message.product ? exports.Product.toJSON(message.product) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetProductResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetProductResponse();
        message.product = (object.product !== undefined && object.product !== null)
            ? exports.Product.fromPartial(object.product)
            : undefined;
        return message;
    },
};
function createBaseListProductsRequest() {
    return {};
}
exports.ListProductsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListProductsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ListProductsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseListProductsRequest();
        return message;
    },
};
function createBaseListProductsResponse() {
    return { products: [] };
}
exports.ListProductsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.products) {
            exports.Product.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListProductsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.products.push(exports.Product.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { products: Array.isArray(object === null || object === void 0 ? void 0 : object.products) ? object.products.map((e) => exports.Product.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.products) {
            obj.products = message.products.map((e) => e ? exports.Product.toJSON(e) : undefined);
        }
        else {
            obj.products = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListProductsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListProductsResponse();
        message.products = ((_a = object.products) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Product.fromPartial(e))) || [];
        return message;
    },
};
exports.ProductServiceService = {
    createProduct: {
        path: "/product.ProductService/CreateProduct",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateProductRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateProductRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateProductResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateProductResponse.decode(value),
    },
    getProduct: {
        path: "/product.ProductService/GetProduct",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetProductRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetProductRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetProductResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetProductResponse.decode(value),
    },
    listProducts: {
        path: "/product.ProductService/ListProducts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListProductsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListProductsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListProductsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListProductsResponse.decode(value),
    },
};
exports.ProductServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ProductServiceService, "product.ProductService");
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
