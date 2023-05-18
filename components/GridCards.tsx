import React from "react";
import {
  Button,
  Container,
  Grid,
  Image,
  SemanticWIDTHS,
} from "semantic-ui-react";

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
  columns: SemanticWIDTHS;
  cards: CardData[];
};

const GridCards: React.FC<GridCardsProps> = ({ columns, cards }) => {
  return (
    <Container className="GridCards">
      <Grid stackable>
        <Grid.Row columns={columns}>
          {cards.map((card) => (
            <Grid.Column key={card.title} stretched className="py-6">
              <Card
                content={
                  <div>
                    <Image
                      alt={card.icon.alt}
                      className="lozad"
                      src={card.icon.src}
                      size="tiny"
                      centered
                    />
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    {!!card.cta && (
                      <Button
                        href={card.link}
                        className="bg-green-800 text-white w-[250px]"
                      >
                        {card.cta}
                      </Button>
                    )}
                  </div>
                }
              />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default GridCards;
