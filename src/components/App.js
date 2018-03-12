import React, { Component } from 'react';
import Tiles from './Tiles';
import { Container, Button } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      tiles: []
    };
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
      let nextState = currentState.filter(tile => tile !== link);
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
    return (
      <Container>
        <Button
          content="Edit"
          icon="edit"
          labelPosition="left"
          floated="right"
          onClick={this.toggleEditMode.bind(this)}
        />
        <Tiles
          items={this.state.tiles}
          enableEditing={this.state.editMode}
          removeTile={this.removeTile.bind(this)}
        />
      </Container>
    );
  }
}

export default App;
