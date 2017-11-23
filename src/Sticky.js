import React, { Component } from 'react';
import Stickyfill from 'stickyfilljs';
import PropTypes from 'prop-types';

function omit(object, keysToOmit) {
  const result = {};

  Object.keys(object).forEach(key => {
    if (keysToOmit.indexOf(key) === -1) {
      result[key] = object[key];
    }
  });

  return result;
}

export default class Sticky extends Component {
  componentDidMount() {
    Stickyfill.add(this.element);
  }

  componentWillUnmount() {
    Stickyfill.remove(this.element);
  }

  render() {
    const style = {
      top: 0,
      bottom: 0,
    };

    Object.keys(this.props.style).forEach(key => {
      style[key] = this.props.style[key];
    });

    style.position = 'sticky';

    const propsToOmit = [
      'ref',
      'children',
      'className',
      'style',
    ];

    return (
      <div
        { ...omit(this.props, propsToOmit) }
        ref={ el => this.element = el }
        className={ `StickyElement ${ this.props.className }` }
        style={ style }
      >
        { this.props.children }
      </div>
    );
  }
}

Sticky.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any.isRequired,
};

Sticky.defaultProps = {
  className: '',
  style: {},
};
