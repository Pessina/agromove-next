import React, { Component } from 'react';
import {
  Container, Grid, Image
} from 'semantic-ui-react';
import { modalImage } from '../utils/utils';

export default class Hero extends Component {
  render() {
    const {
      imagePath,
      alt,
      title,
      phrase,
      textPosition,
    } = this.props;

    return (
      <div className="Hero">
        <Container>
          <Grid stackable>
            <Grid.Row columns={2}>
              {!!(textPosition == 'right') && (
              <Grid.Column only="computer tablet" width={9}>
                {modalImage(<Image className="lozad" alt={alt} src={imagePath} style={{ margin: '0px auto' }} rounded />)}
              </Grid.Column>
              )}
              <Grid.Column verticalAlign="middle" width={7} textAlign="left">
                <h2>{title}</h2>
                <p>{phrase}</p>
              </Grid.Column>
              {!!(textPosition == 'left') && (
              <Grid.Column only="computer tablet" width={9}>
                {modalImage(<Image className="lozad" alt={alt} src={imagePath} style={{ margin: '0px auto' }} rounded />)}
              </Grid.Column>
              )}
              <Grid.Column only="mobile" centered>
                <Image className="lozad" alt={alt} src={imagePath} style={{ margin: '0px auto' }} rounded />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
