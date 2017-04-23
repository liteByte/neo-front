import React, {Component} from "react";
import DatePicker from "material-ui/DatePicker";

const DateTimeFormat = global.Intl.DateTimeFormat;

const divCenterStyle = {
  height: '100%',
  flex: 1,
  textAlign: 'center',
  color: 'white',
};

const textFieldStyle = {
  width: '100%',
  maxWidth: 256,
  minWidth: 180,
};

const inputStyle = {
  textAlign: 'center'
};

export default class Center extends Component {

  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 3);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 3);
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
    };
  }

  render() {
    return (
      <div style={divCenterStyle}>
        <DatePicker
          hintText="Landscape Dialog"
          value={this.props.date}
          onChange={this.props.handleDate}
          autoOk={true}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          formatDate={
            new DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }).format
          }
          textFieldStyle={textFieldStyle}
          inputStyle={inputStyle}
        />
      </div>
    );
  }
}

Center.propTypes = {
  date: React.PropTypes.object.isRequired,
  handleDate: React.PropTypes.func.isRequired,
};
