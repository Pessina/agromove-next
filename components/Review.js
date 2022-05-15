import React, { Component } from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';

export default class Review extends Component {
styles = {
  image: {
    height: '112px',
    width: '112px',
    marginBottom: '16px'
  },
}

render() {
  const {
    person,
    text,
    reversed
  } = this.props;

  return (
    <Container centered className="Review">
      <Grid stackable>
        <Grid.Row columns={16} textAlign="middle" reversed={reversed && 'computer'}>
          <Grid.Column width={6} textAlign="center">
            {person.image && <Image className="lozad" circular centered src={person.image} style={{ ...this.styles.image }} />}
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
}
}
