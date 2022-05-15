import React, { Component } from 'react';

export default class GridCards extends Component {
  render() {
    const {
      content
    } = this.props;

    return (
      <div className="Card">
        {content}
      </div>
    );
  }
}
