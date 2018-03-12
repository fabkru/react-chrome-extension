import React, { Component } from 'react';
import Tile from './Tile';

class Tiles extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.items.map(tile => <Tile link={tile} />)}</div>;
  }
}

export default Tiles;
