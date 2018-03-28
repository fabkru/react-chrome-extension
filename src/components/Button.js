import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  getClassNames() {
    let defaultClasses = 'ui button';
    if (this.props.additionalClassNames) {
      return defaultClasses + ' ' + this.props.additionalClassNames;
    }
    return defaultClasses;
  }

  render() {
    if (this.props.isVisible === false) {
      return null;
    }

    return (
      <button className={this.getClassNames()} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  isVisible: PropTypes.bool,
  additionalClassNames: PropTypes.string
};

export default Button;
