import React, {Component} from "react";
import Neo from "./Neo";

export default class SpaceObject extends Component {

  constructor(props) {
    super(props);
    this.updateState(props);
  }

  updateState = (props) => {
    const neo = props.data.display;
    const width = props.dimensions.width;
    const height = props.dimensions.height;
    const dimension = width < height ? width : height;
    const ratio = dimension * .1;

    const style = {
      width: neo.size * ratio,
      height: neo.size * ratio,
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      left: .5 * width + Math.cos(toRadians(neo.angle)) * neo.distance / 2 * dimension,
      top: .5 * height - Math.sin(toRadians(neo.angle)) * neo.distance / 2 * dimension,
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
        {this.props.children ?
          this.props.children
          :
          <Neo data={this.props.data}/>
        }
      </article>
    );
  }
}


SpaceObject.propTypes = {
  style: React.PropTypes.object,
  dimensions: React.PropTypes.object.isRequired,
  data: React.PropTypes.object.isRequired,
};
