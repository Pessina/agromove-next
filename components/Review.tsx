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
      className={`flex flex-row items-center gap-32 
                ${reversed ? "flex-row-reverse mr-32" : "ml-32"}`}
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
        <p>{person.job}</p>
      </div>
      <p className="max-w-[700px]">{text}</p>
    </div>
  );
};

export default Review;
