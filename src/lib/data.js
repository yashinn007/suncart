export const getProductsData = async () => {
  "use cache";
  const res = await fetch("https://suncart-three.vercel.app/data.json", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data;
};

// export const getProductDetails = async () => {

//   const res = await fetch("https://suncart-three.vercel.app/data.json/1");
//   const data = await res.json();
//   return data;
// };
