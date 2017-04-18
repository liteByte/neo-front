import React, {Component} from "react";

export default class Size extends Component {

  constructor(props) {
    super(props);
    this.updateState(props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps);
  }

  updateState(props) {
    this.state = {
      size: addCommas(props.data.avg.toFixed(2)),
      error: addCommas(((props.data.max - props.data.min) / 2).toFixed(2)),
    };

    function addCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
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
