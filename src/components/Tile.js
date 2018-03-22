import React, { Component } from 'react';
import Button from './Button';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }

  onRemove() {
    this.props.onRemove(this.props.id);
  }

  render() {
    return (
      <div id={this.props.id} className={'column'}>
        <a href={this.props.link}>
          <img className={'ui medium image'} src={this.props.thumbnail} />
        </a>
        <Button
          content={'Remove'}
          isVisible={this.props.showRemoveButton}
          onClick={this.onRemove}
        />
      </div>
    );
  }
}

export default Tile;
