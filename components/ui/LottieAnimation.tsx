import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";

export default function LottieAnimation({ isPlaying }: { isPlaying: boolean }) {
  const defaultOptions = {
    loop: isPlaying,
    autoplay: isPlaying,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={200} width={400} />;
}
