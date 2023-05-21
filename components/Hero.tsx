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
  imageClassName?: string;
};

const Hero: React.FC<HeroProps> = ({
  imagePath,
  alt,
  title,
  phrase,
  textPosition,
  imageClassName = "",
}) => {
  return (
    <div
      className={`flex items-center flex-col-reverse w-full mg:w-initial md:flex-row md:h-[600px] justify-between gap-10 md:gap-20
      ${textPosition === "right" ? "md:flex-row-reverse" : ""}`}
    >
      <Image
        alt={alt}
        src={imagePath.src}
        height={600}
        width={600}
        className={`${imageClassName} w-full h-auto md:h-initial md:w-initial`}
      />
      <div className="grow w-full md:max-w-[400px]">
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-2">{phrase}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
