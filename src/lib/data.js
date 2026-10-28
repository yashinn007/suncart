export const getProductsData = async () => {
  "use cache";
  const res = await fetch("https://suncart-three.vercel.app/data.json");
  const data = await res.json();
  return data;
};
