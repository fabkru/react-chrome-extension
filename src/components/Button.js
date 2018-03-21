import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  getClassNames() {
    if (this.props.additionalClassNames) {
      return 'ui button ' + this.props.additionalClassNames;
    }
    return 'ui button';
  }

  render() {
    if (this.props.isVisible === false) {
      return null;
    }

    return (
      <button className={this.getClassNames()} onClick={this.props.onClick}>
        {this.props.content}
      </button>
    );
  }
}

export default Button;
