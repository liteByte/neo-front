import React, {Component} from "react";

export default class SpaceObject extends Component {

  constructor(props) {
    super(props);
    this.updateState(props);
  }

  updateState = (props) => {
    const ratio = 500 / props.dimensions.width;

    const style = {
      width: 100 / ratio,
      height: 100 / ratio,
      position: 'absolute',
      transform: 'translate(-50%, -50%)'
    };

    this.state = {
      style: {
        ...style,
        ...props.style,
      }
    }
  };

  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps);
  }

  render() {
    return (
      <article style={this.state.style}>
        {this.props.children}
      </article>
    );
  }
}


SpaceObject.propTypes = {
  style: React.PropTypes.object,
  dimensions: React.PropTypes.object.isRequired,
};
