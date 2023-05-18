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
  columns: number;
  cards: CardData[];
};

const GridCards: React.FC<GridCardsProps> = ({ columns, cards }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card) => (
        <Card
          className="flex flex-col items-center justify-center gap-2"
          key={card.link}
          content={
            <>
              <Image
                alt={card.icon.alt}
                src={card.icon.src}
                height={200}
                width={200}
                className="h-[72px] w-auto"
              />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              {!!card.cta && (
                <Link href={card.link} passHref>
                  <Button className="w-[250px]">{card.cta}</Button>
                </Link>
              )}
            </>
          }
        />
      ))}
    </div>
  );
};

export default GridCards;
