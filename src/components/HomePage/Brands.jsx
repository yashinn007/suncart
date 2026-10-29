import Image from "next/image";
import adidas from "@/photo/adidas.png";
import arong from "@/photo/arong.png";
import gucci from "@/photo/gucci.png";
import lotto from "@/photo/lotto.jpg";
import zara from "@/photo/zara.webp";

const Brands = () => {
  return (
    <div className="my-20">
      <h2 className="text-xl lg:text-3xl font-bold text-gray-600 mb-15 text-center">
        Top Brands
      </h2>
      <div className="flex justify-center items-center gap-7">
        <div className="w-40 h-auto">
          <Image
            src={adidas}
            alt="brand-adidas"
            height={400}
            width={400}
            className=""
          ></Image>
        </div>
        <div className="w-25 h-auto">
          <Image
            src={arong}
            alt="brand-arong"
            height={400}
            width={400}
            className=""
          ></Image>
        </div>
        <div className="w-40 h-auto">
          <Image
            src={lotto}
            alt="brand-lotto"
            height={400}
            width={400}
            className=""
          ></Image>
        </div>
        <div className="w-40 h-auto">
          <Image
            src={zara}
            alt="brand-zara"
            height={400}
            width={400}
            className=""
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Brands;
