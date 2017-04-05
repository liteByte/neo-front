import React, { Component } from 'react';

const style = {
  height: "calc(100% - 100px)"
};

export default class Main extends Component {
  render() {
    return (
      <main style={style}/>
    );
  }
}
