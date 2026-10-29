import Link from "next/link";
import React from "react";

const Category = async () => {
  "use cache";
  const res = await fetch("https://suncart-three.vercel.app/categories.json");
  const categories = await res.json();

  //console.log(categories);

  return (
    <div className="space-x-2 md:space-x-5 mb-5">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`?category=${category.name.toLowerCase()}`}
        >
          <button className="btn btn-sm btn-outline btn-info rounded-full my-1">
            <span className="p-1 rounded-full bg-slate-200">
              {category.icon}
            </span>{" "}
            {category.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Category;
