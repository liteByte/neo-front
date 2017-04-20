import React, {Component} from "react";

export default class SpaceObject extends Component {

  constructor(props) {
    super(props);
    this.updateState(props);
  }

  updateState = (props) => {
    const width = props.dimensions.width;
    const height = props.dimensions.height;
    const dimension = width < height ? width : height;
    const ratio = 500 / dimension;

    const style = {
      width: props.size / ratio,
      height: props.size / ratio,
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      left: .5 * width + Math.cos(toRadians(props.angle)) * props.distance / 2 / 100 * dimension,
      top: .5 * height - Math.sin(toRadians(props.angle)) * props.distance / 2 / 100 * dimension,
    };

    this.state = {
      style: {
        ...style,
        ...props.style,
      }
    };

    function toRadians(a) {
      return (Math.PI / 180) * a;
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
  angle: React.PropTypes.number.isRequired,
  distance: React.PropTypes.number.isRequired,
  size: React.PropTypes.number.isRequired,
};
