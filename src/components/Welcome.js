import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

class Tile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header as="h2">
        <Icon name="info" />
        <Header.Content>
          Empty.
          <Header.Subheader>Add a tile by right-clicking.</Header.Subheader>
        </Header.Content>
      </Header>
    );
  }
}

export default Tile;
