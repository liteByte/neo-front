import React, {Component} from "react";
import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

const headerStyle = {
  width: '100%',
  height: 50,
  minWidth: 300,
  display: 'flex',
  position: 'fixed',
  top: 0,
  zIndex: 1400,
  background: '#0a0a0a',
  willChange: 'transform',
};

export default class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <Left/>
        <Center date={this.props.date} handleDate={this.props.handleDate}/>
        <Right handleAbout={this.props.handleAbout}/>
      </header>
    );
  }
}

Header.propTypes = {
  date: React.PropTypes.object.isRequired,
  handleDate: React.PropTypes.func.isRequired,
  handleAbout: React.PropTypes.func.isRequired,
};
