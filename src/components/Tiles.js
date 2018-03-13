import React, { Component } from 'react';
import Tile from './Tile';
import { Grid } from 'semantic-ui-react';

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
      <Grid columns={4} padded>
        {this.props.items.map(tile => (
          <Grid.Column>
            <Tile
              link={tile.link}
              thumbnail={tile.thumbnail}
              showRemoveButton={this.props.enableEditing}
              removeTile={this.onRemove}
            />
          </Grid.Column>
        ))}
      </Grid>
    );
  }
}

export default Tiles;
