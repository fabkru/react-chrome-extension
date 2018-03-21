import React, { Component } from 'react';
import Tile from './Tile';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }

  onRemove(link) {
    this.props.removeTile(link);
  }

  render() {
    return (
      <div className={'ui four column grid padded'}>
        {this.props.items.map(tile => (
          <Tile
            link={tile.link}
            thumbnail={tile.thumbnail}
            showRemoveButton={this.props.enableEditing}
            onRemove={this.onRemove}
          />
        ))}
      </div>
    );
  }
}

export default Grid;
