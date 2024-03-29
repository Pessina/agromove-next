import Image from "next/image";
import Link from "next/link";
import React from "react";

import Button from "./Button";
import Card from "./Card";

type CardData = {
  title: string;
  text: string;
  icon: {
    src: string;
    alt: string;
  };
  cta?: string;
  link?: string;
};

type GridCardsProps = {
  cards: CardData[];
  className?: string;
};

const GridCards: React.FC<GridCardsProps> = ({ className = "", cards }) => {
  return (
    <div
      className={`${className} flex flex-col md:grid grid-cols-3 gap-3 lg:gap-6`}
    >
      {cards.map((card, index) => (
        <Card
          className="flex flex-col items-center justify-center gap-3"
          key={index}
        >
          <Image
            alt={card.icon.alt ?? ""}
            src={card.icon.src}
            height={200}
            width={200}
            className="h-[72px] w-auto"
          />
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="text-sm grow">{card.text}</p>
          {card.cta && card.link && (
            <Link href={card.link} passHref>
              <Button className="lg:w-[250px]">{card.cta}</Button>
            </Link>
          )}
        </Card>
      ))}
    </div>
  );
};

export default GridCards;
