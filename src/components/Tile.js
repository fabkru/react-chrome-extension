import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Button from './Button';

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
        <Image src={this.props.thumbnail} as={'a'} href={this.props.link} />
        <Button
          content={'Remove'}
          isVisible={this.props.showRemoveButton}
          onClick={this.handleRemove}
        />
      </div>
    );
  }
}

export default Tile;
