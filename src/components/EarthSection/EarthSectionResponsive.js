import React, {Component} from "react";
import IconChevronRight from "material-ui/svg-icons/navigation/chevron-right";
import IconButton from "material-ui/IconButton";
import InfoButton from "../InfoButton";
import Space from "./Space";

const sectionStyle = {
  width: '100%',
  float: 'left',
  height: '100%',
};

const titleStyle = {
  margin: '0',
  fontSize: '1.25em',
  fontWeight: 'normal',
};

const iconStyle = {
  width: 32,
  height: 32,
  padding: 0,
};

export default class EarthSectionResponsive extends Component {
  render() {
    return (
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Near Earth Objects<InfoButton/></h2>
        <IconButton style={iconStyle} onClick={() => this.props.setOpen(true)}>
          <IconChevronRight/>
        </IconButton>
        <Space/>
      </section>
    );
  }
}

EarthSectionResponsive.propTypes = {
  setOpen: React.PropTypes.func.isRequired,
};