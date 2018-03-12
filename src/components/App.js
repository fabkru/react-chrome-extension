import React, { Component } from "react";
import Tiles from "./Tiles";
import { Container, Button } from "semantic-ui-react";

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
    chrome.storage.local.get("tiles", callback);
  }

  toggleEditMode() {
    let currentState = this.state.editMode;
    this.setState({
      editMode: !currentState
    });
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
        <Tiles items={this.state.tiles} />
      </Container>
    );
  }
}

export default App;
