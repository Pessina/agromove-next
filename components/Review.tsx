import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

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
    <Container centered className="Review">
      <Grid stackable>
        <Grid.Row
          columns={16}
          textAlign="center"
          reversed={reversed ? "computer" : undefined}
        >
          <Grid.Column width={6} textAlign="center">
            {person.image && (
              <Image
                circular
                centered
                src={person.image.src}
                className="h-[112px] w-[112px] mb-4"
                alt="logo"
                size="small"
              />
            )}
            <b>{person.name}</b>
            <p>{person.job}</p>
          </Grid.Column>
          <Grid.Column width={10}>
            <p>{text}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Review;
