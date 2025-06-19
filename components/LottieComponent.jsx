import Lottie from "lottie-react";
import animationData from "@/public/animation/animation.json";

const LottieComponent = () => {
  return (
    <div className="w-96 h-96">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieComponent;
