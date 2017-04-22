import React, {Component} from "react";
import Measure from "react-measure";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import InfoButton from "../InfoButton";
import List from "./List";
import DetailSection from "../DetailSection/DetailSection";

const sectionStyle = {
  width: 'calc(50% - 10px)',
  height: '100%',
  float: 'left',
  position: 'relative',
};

const titleStyle = {
  margin: '0 0 25px 0',
  fontSize: '1.25em',
  fontWeight: 'normal',
};

const listContainerStyle = {
  width: '100%',
  minHeight: 'calc(100% - 58px)',
  display: 'flex',
  position: 'absolute',
  top: 58,
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  willChange: 'transform',
  background: 'rgba(0, 0, 0, .15)',
};

export default class ListSection extends Component {
  render() {
    return (
      <section style={sectionStyle}>
        <h2 style={titleStyle}>
          Near Earth Objects
          <InfoButton
            title="NEAR EARTH OBJECT"
            description="A small Solar System body whose orbit brings it close to the Earth."/>
        </h2>
        <CSSTransitionGroup
          transitionName="detail-transition"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={150}
        >
          {this.props.detail ?
            <DetailSection key={0} selectNeo={this.props.selectNeo} neo={this.props.neo} class="small"/>
            :
            <Measure>
              { dimensions =>
                <div key={1} style={listContainerStyle}>
                  <List neos={this.props.neos} selectNeo={this.props.selectNeo} maxHeight={dimensions.height}/>
                </div>
              }
            </Measure>
          }
        </CSSTransitionGroup>
      </section>
    );
  }
}

ListSection.propTypes = {
  neos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  neo: React.PropTypes.object,
  selectNeo: React.PropTypes.func.isRequired,
  detail: React.PropTypes.bool.isRequired,
};
