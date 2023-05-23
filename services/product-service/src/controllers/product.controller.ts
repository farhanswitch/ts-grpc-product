import { DataSource } from "typeorm";
import { Product } from "../models/product.model";

interface IRequestCreateProduct {
  name: string;
  description: string;
  image: string;
  tags: string[];
}

export async function createProduct(
  db: DataSource,
  req: IRequestCreateProduct
): Promise<Product> {
  const productRepository = db.getRepository(Product);
  const product = new Product();
  product.name = req.name;
  product.description = req.description;
  product.image = req.image;
  product.tags = req.tags;
  return productRepository.save(product);
}
