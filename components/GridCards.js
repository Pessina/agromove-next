import React, { Component } from "react";
import { Button, Container, Grid, Image } from "semantic-ui-react";

import Card from "./Card";

export default class GridCards extends Component {
  style = {
    button: {
      backgroundColor: "#2E6B34",
      color: "#FFFFFF",
      width: "250px",
    },
  };

  render() {
    const { columns, cards } = this.props;

    return (
      <Container className="GridCards">
        <Grid stackable>
          <Grid.Row columns={columns}>
            {cards.map((card) => (
              <Grid.Column
                key={card.title}
                stretched
                style={{ margin: "24px 0px" }}
              >
                <Card
                  content={
                    <div>
                      <Image
                        alt={"icon"}
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
                          style={{ ...this.style.button }}
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
  }
}
