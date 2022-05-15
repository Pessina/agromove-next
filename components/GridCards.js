import React, { Component } from 'react';
import {
  Grid, Container, Image, Button
} from 'semantic-ui-react';
import Card from './Card';

export default class GridCards extends Component {
  style = {
    button: {
      backgroundColor: '#2E6B34',
      color: '#FFFFFF',
      width: '250px',
    }
  };

  render() {
    const {
      columns,
      cards
    } = this.props;

    return (
      <Container className="GridCards">
        <Grid stackable>
          <Grid.Row columns={columns}>
            {cards.map(card => (
              <Grid.Column stretched style={{ margin: '24px 0px' }}>
                <Card
                  content={(
                    <div>
                      <Image className="lozad" src={card.icon} size="tiny" centered />
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                      {!!card.cta && <Button href={card.link} style={{ ...this.style.button }}>{card.cta}</Button>}
                    </div>
                  )}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
