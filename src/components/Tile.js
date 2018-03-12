import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <a href={this.props.link}>{this.props.link}</a>
      </div>
    );
  }
}

export default Tile;
