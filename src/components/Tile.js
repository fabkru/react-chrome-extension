import React, { Component } from 'react';
import { Image, Button } from 'semantic-ui-react';

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
        {this.props.showRemoveButton ? (
          <Button
            content={'Remove'}
            size={'mini'}
            onClick={this.handleRemove}
          />
        ) : null}
      </div>
    );
  }
}

export default Tile;
