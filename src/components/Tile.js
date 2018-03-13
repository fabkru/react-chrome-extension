import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.removeTile(this.props.link);
  }

  render() {
    return (
      <div>
        <a href={this.props.link}>{this.props.link}</a>
        {this.props.showRemoveButton ? (
          <Button content="Remove" negative onClick={this.handleRemove} />
        ) : null}
      </div>
    );
  }
}

export default Tile;
