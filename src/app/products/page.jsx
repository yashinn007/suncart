import ProductCard from "@/components/HomePage/ProductCard";
import { getProductsData } from "@/lib/data";
import React from "react";

const ProductsPage = async () => {
  const products = await getProductsData();
  return (
    <div className="py-9 px-3 lg:px-0 container mx-auto ">
      <h2 className="text-xl lg:text-3xl font-bold text-gray-600 mb-7 text-center">
        All Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-5 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
