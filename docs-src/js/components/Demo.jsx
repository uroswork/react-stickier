import React from 'react';
import Sticky from '../../../src/index';
import Arrow from '../../../docs-src/assets/arrow.png';

const bottomText = '<Sticky>\n  <Your component>YAY! I am sticky!</Your component>\n</Sticky>';

export default class extends React.Component {
  handleClick() {
    window.scrollBy({
      top: -document.querySelector('body').offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div className='Content'>
        <div className='container'>
          <div className='Content-inside'>
            <Sticky style={ { top: 50 } }>
              <div className='Demo-one'>
                <div className='Demo-one-upper'>I am sticky text!</div>
                <div>I will continue to scroll when the green element comes</div>
              </div>
            </Sticky>
            <div className='Demo-two'>
              <div>While I am just passing by :(</div>
            </div>
          </div>
        </div>
        <div className='Demo-three'>
          <div className='Demo-three--top'>how to use react-stickier?</div>
          <div className='Demo-three--mid'>
            <code>npm install react-stickier</code>
            <code>import Sticky from 'react-stickier'</code>
          </div>
          <div className='Demo-three--bottom container'>
            <button className='Button-toTop' onClick={ () => this.handleClick() }>
              <div className='Button-toTop--Inner'>
                <div className='Button-toTop-arrow' style={ { backgroundImage: `url(${ Arrow })` } } />
              </div>
            </button>
            <div className='Demo-three--text'>then just wrap component you'd like to be sticky like this</div>
            <code>{ bottomText }</code>
          </div>
        </div>
      </div>
    );
  }
}
