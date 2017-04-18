import React, {Component} from "react";

export default class Size extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: this.props.data.avg.toFixed(2),
      error: ((this.props.data.max - this.props.data.min) / 2).toFixed(2),
    };
  }

  render() {
    return (
      <div className="size-container">
        <div className="size">{this.state.size}<span style={{fontWeight: 'normal'}}>m</span></div>
        <div className="error">&plusmn; {this.state.error}m</div>
      </div>
    );
  }
}

Size.propTypes = {
  data: React.PropTypes.object.isRequired,
};
