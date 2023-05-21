import Image from "next/image";
import React from "react";

type Person = {
  name: string;
  job: string;
  image?: {
    src: string;
  };
};

type ReviewProps = {
  person: Person;
  text: string;
  reversed?: boolean;
};

const Review: React.FC<ReviewProps> = ({ person, text, reversed }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-4 md:gap-32 text-center md:text-left
                ${reversed ? "md:flex-row-reverse md:mr-32" : "md:ml-32"}`}
    >
      <div className="shrink-0 flex flex-col items-center">
        {person.image && (
          <Image
            src={person.image.src}
            className="h-[112px] w-[112px] mb-4 rounded-full shrink-0"
            alt="logo"
            height={200}
            width={200}
          />
        )}
        <b>{person.name}</b>
        <p className="text-sm md:text-base">{person.job}</p>
      </div>
      <p className="max-w-[700px]">{text}</p>
    </div>
  );
};

export default Review;
