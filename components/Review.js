import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

const Review = ({ person, text, reversed }) => {
  const styles = {
    image: {
      height: "112px",
      width: "112px",
      marginBottom: "16px",
    },
  };

  return (
    <Container centered className="Review">
      <Grid stackable>
        <Grid.Row
          columns={16}
          textAlign="middle"
          reversed={reversed && "computer"}
        >
          <Grid.Column width={6} textAlign="center">
            {person.image && (
              <Image
                circular
                centered
                src={person.image.src}
                style={{ ...styles.image }}
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
