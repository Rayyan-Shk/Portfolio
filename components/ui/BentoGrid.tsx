import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import MagicButton from "../MagicButton";
import dynamic from "next/dynamic";

// Separate Lottie component to handle client-side animation
const LottieAnimation = dynamic(
  () =>
    import("./LottieAnimation").catch(() => {
      // Fallback component if Lottie fails to load
      return () => null;
    }),
  { ssr: false }
);

// Separate TechStack component for better organization
const TechStack = () => {
  const techStacks = {
    left: ["ReactJS", "Express", "Typescript"],
    right: ["NodeJS", "NextJS", "SQL/NoSQL"],
  };

  const TechItem = ({ text }: { text: string }) => (
    <span className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
      {text}
    </span>
  );

  return (
    <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
      <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
        {techStacks.left.map((tech, i) => (
          <TechItem key={`left-${i}`} text={tech} />
        ))}
        <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]" />
      </div>
      <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
        <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]" />
        {techStacks.right.map((tech, i) => (
          <TechItem key={`right-${i}`} text={tech} />
        ))}
      </div>
    </div>
  );
};

// Create a separate file called LottieAnimation.tsx
// import Lottie from "react-lottie";
// import animationData from "@/data/confetti.json";

// export default function LottieAnimation({ isPlaying }: { isPlaying: boolean }) {
//   const defaultOptions = {
//     loop: isPlaying,
//     autoplay: isPlaying,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   return <Lottie options={defaultOptions} height={200} width={400} />;
// }

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window === "undefined") return;
    navigator.clipboard.writeText("rayyanshaikhassociates@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reset after 3 seconds
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={cn("h-full", id === 6 && "flex justify-center")}>
        {/* Background Image */}
        {img && (
          <div className="w-full h-full absolute">
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          </div>
        )}

        {/* Spare Image */}
        {spareImg && (
          <div
            className={cn(
              "absolute right-0 -bottom-5",
              id === 5 && "w-full opacity-80"
            )}
          >
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          </div>
        )}

        {/* Background Animation */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
          </BackgroundGradientAnimation>
        )}

        {/* Content */}
        <div
          className={cn(
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            titleClassName
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>

          {id === 2 && <GridGlobe />}
          {id === 3 && <TechStack />}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <LottieAnimation isPlaying={copied} />
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
