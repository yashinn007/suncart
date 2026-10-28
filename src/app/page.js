import heroImg from "@/photo/hero.png";

export default function Home() {
  return (
    <div className="container mx-auto ">
      <div
        className="hero min-h-[25vh] md:min-h-[35vh] lg:min-h-[90vh]"
        style={{
          backgroundImage: `url(${heroImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}
