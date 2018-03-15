import React, { Component } from 'react';
import Tiles from './Tiles';
import Welcome from './Welcome';
import { Container, Button } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      tiles: []
    };
    this.removeTile = this.removeTile.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  componentDidMount() {
    let callback = result => {
      this.setState({
        tiles: result.tiles
      });
    };
    chrome.storage.local.get('tiles', callback);
  }

  toggleEditMode() {
    let currentState = this.state.editMode;
    this.setState({
      editMode: !currentState
    });
  }

  removeTile(link) {
    let callback = result => {
      let currentState = result.tiles;
      let nextState = currentState.filter(tile => tile.link !== link);
      chrome.storage.local.set({
        tiles: nextState
      });
      this.setState({
        tiles: nextState
      });
    };
    chrome.storage.local.get('tiles', callback);
  }

  render() {
    // Render tutorial when empty
    if (!this.state.tiles || this.state.tiles.length < 1) {
      return (
        <Container>
          <h1 className={'ui header left floated'}>New tab</h1>
          <div className={'ui clearing divider'} />
          <Welcome />
        </Container>
      );
    }

    // Render tiles when atleast one tile
    return (
      <Container>
        <h1 className={'ui header left floated'}>New tab</h1>
        <Button
          id={'edit'}
          content={'Edit'}
          floated={'right'}
          onClick={this.toggleEditMode}
          basic
        />
        <div className={'ui clearing divider'} />
        <Tiles
          items={this.state.tiles}
          enableEditing={this.state.editMode}
          removeTile={this.removeTile}
        />
      </Container>
    );
  }
}

export default App;
