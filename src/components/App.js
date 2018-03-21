import React, { Component } from 'react';
import Grid from './Grid';
import Welcome from './Welcome';
import Button from './Button';
import { Container } from 'semantic-ui-react';
import Storage from '../utils/Storage';
const storage = new Storage();

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
    storage.get('tiles').then(tiles => {
      this.setState({
        tiles: tiles
      });
    });
  }

  toggleEditMode() {
    let currentState = this.state.editMode;
    this.setState({
      editMode: !currentState
    });
  }

  removeTile(link) {
    storage.get('tiles').then(tiles => {
      let nextState = tiles.filter(tile => tile.link !== link);
      storage.set('tiles', nextState);
      this.setState({
        tiles: nextState
      });
    });
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
          onClick={this.toggleEditMode}
          additionalClassNames={'right floated'}
        />
        <div className={'ui clearing divider'} />
        <Grid
          items={this.state.tiles}
          enableEditing={this.state.editMode}
          removeTile={this.removeTile}
        />
      </Container>
    );
  }
}

export default App;
