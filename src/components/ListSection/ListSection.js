import React, {Component} from "react";
import InfoButton from "../InfoButton";
import List from "./List";
import DetailSection from "../DetailSection/DetailSection";

const sectionStyle = {
  width: 'calc(50% - 10px)',
  float: 'left',
  height: '100%',
};

const titleStyle = {
  margin: '0 0 25px 0',
  fontSize: '1.25em',
  fontWeight: 'normal',
};

const listContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
};

export default class ListSection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      detail: true,
      neo: this.props.neos[0]
    };
  }

  selectNeo = (neo) => {
    const state = {
      detail: !!neo,
      neo: neo,
    };
    this.setState(state);
  };

  render() {
    return (
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Near Earth Objects<InfoButton/></h2>
        {this.state.detail ?
          <DetailSection selectNeo={this.selectNeo} neo={this.state.neo}/>
          :
          <div style={listContainerStyle}>
            <List neos={this.props.neos} selectNeo={this.selectNeo}/>
          </div>
        }
      </section>
    );
  }
}

ListSection.propTypes = {
  neos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
