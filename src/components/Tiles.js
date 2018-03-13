import React, { Component } from 'react';
import Tile from './Tile';

class Tiles extends Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }

  onRemove(link) {
    this.props.removeTile(link);
  }

  render() {
    return (
      <div>
        {this.props.items.map(tile => (
          <Tile
            link={tile}
            showRemoveButton={this.props.enableEditing}
            removeTile={this.onRemove.bind(this)}
          />
        ))}
      </div>
    );
  }
}

export default Tiles;
