import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { image, name, rating, price } = product;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="relative w-full aspect-square ">
        <Image src={image} alt={name} fill className="object-cover"></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm lg:text-xl">{name}</h2>

        <div className="card-actions justify-between items-center my-1 lg:my-3 flex-1">
          <span className="text-xl lg:text-2xl font-semibold text-[#ae9077]">
            ${price}
          </span>
          <span className="flex justify-center items-center gap-1x font-semibold">
            <FaRegStar />
            {rating}
          </span>
        </div>
        <button className="btn mt-auto">View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
