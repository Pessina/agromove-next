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
    <div className="grid-cols-12">
      <div className="cols-span-4">
        {person.image && (
          <Image
            src={person.image.src}
            className="h-[112px] w-[112px] mb-4"
            alt="logo"
            height={200}
            width={200}
          />
        )}
        <b>{person.name}</b>
        <p>{person.job}</p>
      </div>
      <div className="cols-span-8">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Review;
