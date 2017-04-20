import React, {Component} from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import IconChevronRight from "material-ui/svg-icons/navigation/chevron-right";
import IconButton from "material-ui/IconButton";
import InfoButton from "../InfoButton";
import DetailSection from "../DetailSection/DetailSection";
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
        <CSSTransitionGroup
          transitionName="detail-transition"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={150}
        >
          {this.props.detail ?
            <DetailSection key={0} selectNeo={this.props.selectNeo} neo={this.props.neo} class="big"/>
            :
            <div key={1} style={{width: '100%', height: '100%'}}>
              <h2 style={titleStyle}>
                Near Earth Objects
                <InfoButton
                  title="NEAR EARTH OBJECT"
                  description="A small Solar System body whose orbit brings it close to the Earth."/>
              </h2>
              <IconButton style={iconStyle} onClick={() => this.props.setOpen(true)}>
                <IconChevronRight/>
              </IconButton>
              <Space neos={this.props.neos} selectNeo={this.props.selectNeo}/>
            </div>
          }
        </CSSTransitionGroup>
      </section>
    );
  }
}

EarthSectionResponsive.propTypes = {
  setOpen: React.PropTypes.func.isRequired,
  neos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  neo: React.PropTypes.object,
  selectNeo: React.PropTypes.func.isRequired,
  detail: React.PropTypes.bool.isRequired,
};
