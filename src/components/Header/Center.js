import React, {Component} from "react";
import MediaQuery from "react-responsive";
import DatePicker from "material-ui/DatePicker";
import IconButton from "material-ui/IconButton";
import IconLeft from "material-ui/svg-icons/navigation/chevron-left";
import IconRight from "material-ui/svg-icons/navigation/chevron-right";

const DateTimeFormat = global.Intl.DateTimeFormat;

const divCenterStyle = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  flex: 1,
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

  handleNext = () => {
    this.props.handleDate(null, this.addDays(1));
  };

  handlePrev = () => {
    this.props.handleDate(null, this.addDays(-1));
  };

  addDays(days) {
    const date = new Date(this.props.date);
    return new Date(date.setTime(date.getTime() + days * 86400000));
  }

  render() {
    return (
      <div style={divCenterStyle}>
        <MediaQuery minWidth={450}>
          <IconButton onClick={this.handlePrev}><IconLeft/></IconButton>
        </MediaQuery>
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
        <MediaQuery minWidth={450}>
          <IconButton onClick={this.handleNext}><IconRight/></IconButton>
        </MediaQuery>
      </div>
    );
  }
}

Center.propTypes = {
  date: React.PropTypes.object.isRequired,
  handleDate: React.PropTypes.func.isRequired,
};