import React from 'react';
import Sticky from '../../../src/index';

const bottomText = '<Sticky>\n  <Your component> YAY! I am sticky!</Your component>\n</Sticky>';

export default class extends React.Component {
  render() {
    return (
      <div className='Content'>
        <div className='container'>
          <div className='Content-inside'>
            <Sticky style={ { top: 20 } }>
              <div className='Demo-one'>
                <div>I am sticky text!</div>
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
          <div className='Demo-three--bottom'>
            <div>then just wrap component you'd like to be sticky like this</div>
            <code>{ bottomText }</code>
          </div>
        </div>
      </div>
    );
  }
}
