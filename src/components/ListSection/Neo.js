import React, { Component } from 'react';

const tileStyle = {
  padding: 10,
  boxSizing: 'border-box',
};

const imgStyle = {
  width: '100%',
  height: '100%',
};

export default class Neo extends Component {

  getArticleStyle = () => {
    tileStyle.width = this.props.cellSize;
    return tileStyle;
  };

  render() {
    return (
      <article style={this.getArticleStyle()}>
        <img src={this.props.img} alt="Neo" style={imgStyle}/>
      </article>
    );
  }
}

Neo.propTypes = {
  img: React.PropTypes.string.isRequired,
  cellSize: React.PropTypes.number.isRequired,
};
