import React, { Component } from 'react';

const imgStyle = {
  width: '100%',
  height: '100%',
};

export default class Earth extends Component {
  render() {
    return (
      <article {...this.props}>
        <img src="/assets/tierra_nubes.svg" alt="Earth" style={{imgStyle}}/>
      </article>
    );
  }
}
