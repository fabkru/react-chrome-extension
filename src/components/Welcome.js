import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h2 className={'ui header'}>
        Empty
        <div className="sub header">Add a tile by right-clicking.</div>
      </h2>
    );
  }
}

export default Tile;
