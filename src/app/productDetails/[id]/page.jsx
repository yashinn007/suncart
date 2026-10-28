import { getProductsData } from "@/lib/data";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  //console.log(id);

  const products = await getProductsData();
  //console.log(products);

  const filteredProduct = products.find((product) => id == product.id);
  //console.log(filteredProduct);
  const { image, name, price, category, description, brand, rating, stock } =
    filteredProduct;

  return (
    <div className="container mx-auto py-5 md:py-9 px-3 lg:px-0">
      <div className="grid md:grid-cols-2 md:gap-10">
        <div className="p-5 relative aspect-square ">
          <Image
            src={image}
            alt={name}
            sizes="50"
            fill
            className="object-cover "
          ></Image>
        </div>
        <div>
          <div className="space-y-2 md:space-y-3 mt-6 lg:mt-20">
            <h1 className="text-2xl md:text-4xl font-bold">{name}</h1>
            <span className="flex justify-start items-center gap-1 text-lg">
              Rating: <FaStar></FaStar>
              {rating}
            </span>
            <span className="font-semibold text-3xl md:text-4xl">${price}</span>
            <p className="mt-8 md:mt-12 text-lg">
              Description: <span className="text-gray-500">{description}</span>
            </p>
            <p className=" mt-3 text-lg">
              Category: <span className="text-gray-500">{category}</span>
            </p>
            <p className=" mt-3 text-lg">
              Brand: <span className="text-gray-500">{brand}</span>
            </p>
            <p className=" mt-3 text-lg">
              Stock: <span className="text-gray-500">{stock}</span>
            </p>
            <div className="flex items-center gap-2 mt-6 md:mt-10">
              <button className="btn btn-outline btn-accent">WishList</button>
              <button className="btn btn-outline btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
