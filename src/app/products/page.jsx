import ProductCard from "@/components/HomePage/ProductCard";
import Category from "@/components/ProductsPage/Category";

const ProductsPage = async ({ searchParams }) => {
  const { category } = await searchParams;

  const res = await fetch("https://suncart-three.vercel.app/data.json", {
    cache: "force-cache",
  });
  const products = await res.json();

  //filter products using searchParams- category
  const filteredProducts = category
    ? products.filter(
        (product) => product.category.toLowerCase() == category.toLowerCase(),
      )
    : products;

  return (
    <div className="py-9 px-3 lg:px-0 container mx-auto ">
      <h2 className="text-xl lg:text-3xl font-bold text-gray-600 mb-10 text-center">
        All Products
      </h2>
      <Category></Category>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-5 gap-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
