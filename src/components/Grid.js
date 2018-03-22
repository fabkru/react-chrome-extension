import React, { Component } from 'react';
import Tile from './Tile';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }

  onRemove(id) {
    this.props.removeTile(id);
  }

  render() {
    return (
      <div className={'ui four column grid padded'}>
        {this.props.items.map(tile => (
          <Tile
            key={tile.id}
            id={tile.id}
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
