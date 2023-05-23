/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "product";
export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    tags: string[];
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
}
export interface CreateProductRequest {
    name: string;
    description: string;
    image: string;
    tags: string[];
}
export interface CreateProductResponse {
    product: Product | undefined;
}
export interface GetProductRequest {
    id: number;
}
export interface GetProductResponse {
    product: Product | undefined;
}
export interface ListProductsRequest {
}
export interface ListProductsResponse {
    products: Product[];
}
export declare const Product: {
    encode(message: Product, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Product;
    fromJSON(object: any): Product;
    toJSON(message: Product): unknown;
    create<I extends {
        id?: number | undefined;
        name?: string | undefined;
        description?: string | undefined;
        image?: string | undefined;
        tags?: string[] | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & {
        id?: number | undefined;
        name?: string | undefined;
        description?: string | undefined;
        image?: string | undefined;
        tags?: (string[] & string[] & { [K in Exclude<keyof I["tags"], keyof string[]>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Product>]: never; }>(base?: I | undefined): Product;
    fromPartial<I_1 extends {
        id?: number | undefined;
        name?: string | undefined;
        description?: string | undefined;
        image?: string | undefined;
        tags?: string[] | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & {
        id?: number | undefined;
        name?: string | undefined;
        description?: string | undefined;
        image?: string | undefined;
        tags?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["tags"], keyof string[]>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Product>]: never; }>(object: I_1): Product;
};
export declare const CreateProductRequest: {
    encode(message: CreateProductRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateProductRequest;
    fromJSON(object: any): CreateProductRequest;
    toJSON(message: CreateProductRequest): unknown;
    create<I extends {
        name?: string | undefined;
        description?: string | undefined;
        image?: string | undefined;
        tags?: string[] | undefined;
    } & {
        name?: string | undefined;
        description?: string | undefined;
        image?: string | undefined;
        tags?: (string[] & string[] & { [K in Exclude<keyof I["tags"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof CreateProductRequest>]: never; }>(base?: I | undefined): CreateProductRequest;
    fromPartial<I_1 extends {
        name?: string | undefined;
        description?: string | undefined;
        image?: string | undefined;
        tags?: string[] | undefined;
    } & {
        name?: string | undefined;
        description?: string | undefined;
        image?: string | undefined;
        tags?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["tags"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof CreateProductRequest>]: never; }>(object: I_1): CreateProductRequest;
};
export declare const CreateProductResponse: {
    encode(message: CreateProductResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateProductResponse;
    fromJSON(object: any): CreateProductResponse;
    toJSON(message: CreateProductResponse): unknown;
    create<I extends {
        product?: {
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: string[] | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } | undefined;
    } & {
        product?: ({
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: string[] | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & {
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: (string[] & string[] & { [K in Exclude<keyof I["product"]["tags"], keyof string[]>]: never; }) | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["product"], keyof Product>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "product">]: never; }>(base?: I | undefined): CreateProductResponse;
    fromPartial<I_1 extends {
        product?: {
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: string[] | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } | undefined;
    } & {
        product?: ({
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: string[] | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & {
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: (string[] & string[] & { [K_3 in Exclude<keyof I_1["product"]["tags"], keyof string[]>]: never; }) | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & { [K_4 in Exclude<keyof I_1["product"], keyof Product>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "product">]: never; }>(object: I_1): CreateProductResponse;
};
export declare const GetProductRequest: {
    encode(message: GetProductRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetProductRequest;
    fromJSON(object: any): GetProductRequest;
    toJSON(message: GetProductRequest): unknown;
    create<I extends {
        id?: number | undefined;
    } & {
        id?: number | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I | undefined): GetProductRequest;
    fromPartial<I_1 extends {
        id?: number | undefined;
    } & {
        id?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): GetProductRequest;
};
export declare const GetProductResponse: {
    encode(message: GetProductResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetProductResponse;
    fromJSON(object: any): GetProductResponse;
    toJSON(message: GetProductResponse): unknown;
    create<I extends {
        product?: {
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: string[] | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } | undefined;
    } & {
        product?: ({
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: string[] | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & {
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: (string[] & string[] & { [K in Exclude<keyof I["product"]["tags"], keyof string[]>]: never; }) | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["product"], keyof Product>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "product">]: never; }>(base?: I | undefined): GetProductResponse;
    fromPartial<I_1 extends {
        product?: {
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: string[] | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } | undefined;
    } & {
        product?: ({
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: string[] | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & {
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: (string[] & string[] & { [K_3 in Exclude<keyof I_1["product"]["tags"], keyof string[]>]: never; }) | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & { [K_4 in Exclude<keyof I_1["product"], keyof Product>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "product">]: never; }>(object: I_1): GetProductResponse;
};
export declare const ListProductsRequest: {
    encode(_: ListProductsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProductsRequest;
    fromJSON(_: any): ListProductsRequest;
    toJSON(_: ListProductsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): ListProductsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ListProductsRequest;
};
export declare const ListProductsResponse: {
    encode(message: ListProductsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProductsResponse;
    fromJSON(object: any): ListProductsResponse;
    toJSON(message: ListProductsResponse): unknown;
    create<I extends {
        products?: {
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: string[] | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        }[] | undefined;
    } & {
        products?: ({
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: string[] | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        }[] & ({
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: string[] | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & {
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: (string[] & string[] & { [K in Exclude<keyof I["products"][number]["tags"], keyof string[]>]: never; }) | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["products"][number], keyof Product>]: never; })[] & { [K_2 in Exclude<keyof I["products"], keyof {
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: string[] | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "products">]: never; }>(base?: I | undefined): ListProductsResponse;
    fromPartial<I_1 extends {
        products?: {
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: string[] | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        }[] | undefined;
    } & {
        products?: ({
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: string[] | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        }[] & ({
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: string[] | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & {
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: (string[] & string[] & { [K_4 in Exclude<keyof I_1["products"][number]["tags"], keyof string[]>]: never; }) | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & { [K_5 in Exclude<keyof I_1["products"][number], keyof Product>]: never; })[] & { [K_6 in Exclude<keyof I_1["products"], keyof {
            id?: number | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            tags?: string[] | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "products">]: never; }>(object: I_1): ListProductsResponse;
};
export type ProductServiceService = typeof ProductServiceService;
export declare const ProductServiceService: {
    readonly createProduct: {
        readonly path: "/product.ProductService/CreateProduct";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateProductRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateProductRequest;
        readonly responseSerialize: (value: CreateProductResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateProductResponse;
    };
    readonly getProduct: {
        readonly path: "/product.ProductService/GetProduct";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetProductRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetProductRequest;
        readonly responseSerialize: (value: GetProductResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetProductResponse;
    };
    readonly listProducts: {
        readonly path: "/product.ProductService/ListProducts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListProductsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListProductsRequest;
        readonly responseSerialize: (value: ListProductsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListProductsResponse;
    };
};
export interface ProductServiceServer extends UntypedServiceImplementation {
    createProduct: handleUnaryCall<CreateProductRequest, CreateProductResponse>;
    getProduct: handleUnaryCall<GetProductRequest, GetProductResponse>;
    listProducts: handleUnaryCall<ListProductsRequest, ListProductsResponse>;
}
export interface ProductServiceClient extends Client {
    createProduct(request: CreateProductRequest, callback: (error: ServiceError | null, response: CreateProductResponse) => void): ClientUnaryCall;
    createProduct(request: CreateProductRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateProductResponse) => void): ClientUnaryCall;
    createProduct(request: CreateProductRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateProductResponse) => void): ClientUnaryCall;
    getProduct(request: GetProductRequest, callback: (error: ServiceError | null, response: GetProductResponse) => void): ClientUnaryCall;
    getProduct(request: GetProductRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetProductResponse) => void): ClientUnaryCall;
    getProduct(request: GetProductRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetProductResponse) => void): ClientUnaryCall;
    listProducts(request: ListProductsRequest, callback: (error: ServiceError | null, response: ListProductsResponse) => void): ClientUnaryCall;
    listProducts(request: ListProductsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListProductsResponse) => void): ClientUnaryCall;
    listProducts(request: ListProductsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListProductsResponse) => void): ClientUnaryCall;
}
export declare const ProductServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProductServiceClient;
    service: typeof ProductServiceService;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
