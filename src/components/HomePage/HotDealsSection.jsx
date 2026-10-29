import { getProductsData } from "@/lib/data";
import ProductCard from "./ProductCard";

const HotDealsSection = async () => {
  const products = await getProductsData();
  //console.log("products", products);

  return (
    <div className="py-9 px-3 lg:px-0">
      <h2 className="text-xl lg:text-3xl font-bold text-gray-600 my-10 text-center">
        Hot Deals 🔥
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-5 gap-3">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default HotDealsSection;
