import React, {Component} from "react";
import Measure from "react-measure";
import IconButton from "material-ui/IconButton";

const buttonStyle = {
  width: '100%',
  height: '100%',
  padding: 1,
};

const iconStyle = {
  width: '100%',
  height: '100%',
  position: 'relative',
};

export default class Earth extends Component {

  constructor(props) {
    super(props);
    this.updateState(props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps);
  }

  updateState(props) {
    this.state = props.data;
  }

  getIconStyle(dimensions) {
    const dimension = dimensions.width < dimensions.height ? dimensions.width : dimensions.height;
    return {
      ...iconStyle,
      left: dimension * .04,
    }
  }

  render() {
    return (
      <Measure>
        { dimensions =>
          <IconButton
            style={buttonStyle}
            iconStyle={this.getIconStyle(dimensions)}
            onClick={() => this.props.handleAbout(true)}
          >
            <img src="/assets/tierra_nubes.svg" alt="Earth"/>
          </IconButton>
        }
      </Measure>
    );
  }
}

Earth.propTypes = {
  handleAbout: React.PropTypes.func.isRequired,
};
