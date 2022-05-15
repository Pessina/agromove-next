import React, { Component } from 'react';
import { Embed, Container } from 'semantic-ui-react';

export default class Video extends Component {
  render() {
    const {
      id
    } = this.props;

    return (
      <Container className="Video" textAlign="center" text>
        <h2>Conheça nosso fundador Alberto Pessina</h2>
        <Embed
          id={id}
          source="youtube"
          active
          autoplay={false}
          icon={null}
          style={{
            minHeight: '200px', minWidth: '100px', margin: '32px 0px'
          }}
          brandedUI={1}
        />
      </Container>
    );
  }
}
