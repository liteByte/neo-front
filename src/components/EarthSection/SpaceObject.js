import React, {Component} from "react";

export default class SpaceObject extends Component {

  constructor(props) {
    super(props);
    this.updateState(props);
  }

  updateState = (props) => {
    const width = props.dimensions.width;
    const height = props.dimensions.height;
    const ratio = 500 / (width < height ? width : height);

    const style = {
      width: props.size / ratio,
      height: props.size / ratio,
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      left: `calc(50% + ${props.position.x / 2}%)`,
      top: `calc(50% + ${props.position.y / 2}%)`,
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
  position: React.PropTypes.object.isRequired,
  size: React.PropTypes.number.isRequired,
};
