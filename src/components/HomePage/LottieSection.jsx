"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LottieSection = () => {
  return (
    <div style={{ width: 300, height: 300 }}>
      <DotLottieReact src="/sun.json" loop autoplay />
    </div>
  );
};

export default LottieSection;
