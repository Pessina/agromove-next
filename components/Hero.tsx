import Image from "next/image";
import React from "react";

type HeroProps = {
  imagePath: {
    src: string;
  };
  alt: string;
  title: string;
  phrase: string;
  textPosition: "left" | "right";
};

const Hero: React.FC<HeroProps> = ({
  imagePath,
  alt,
  title,
  phrase,
  textPosition,
}) => {
  return (
    <div
      className={`flex items-center gap-10 h-[400px] flex-row
      ${textPosition === "right" ? "flex-row-reverse" : ""}`}
    >
      <div className="grow-[3] h-full">
        <Image
          alt={alt}
          src={imagePath.src}
          height={200}
          width={200}
          className="w-full h-auto"
        />
      </div>
      <div className="grow-1">
        <h2 className="text-3xl">{title}</h2>
        <p>{phrase}</p>
      </div>
    </div>
  );
};

export default Hero;
