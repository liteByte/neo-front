import React, {Component} from "react";
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
  display: 'flex',
  position: 'absolute',
  top: 55,
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  willChange: 'transform',
};

export default class ListSection extends Component {
  render() {
    return (
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Near Earth Objects<InfoButton/></h2>
        <CSSTransitionGroup
          transitionName="detail-transition"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={150}
        >
          {this.props.detail ?
            <DetailSection key={0} selectNeo={this.props.selectNeo} neo={this.props.neo} class="small"/>
            :
            <div key={1} style={listContainerStyle}>
              <List neos={this.props.neos} selectNeo={this.props.selectNeo}/>
            </div>
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
