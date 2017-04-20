import React, {Component} from "react";
import Drawer from "material-ui/Drawer";
import List from "./List";

const containerStyle = {
  willChange: 'transform',
};

const overlayStyle = {
  backgroundColor: "rgba(0, 0, 0, .15)",
};

const listContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  padding: '60px 10px 10px 10px',
};

export default class ListSectionResponsive extends Component {
  render() {
    return (
      <Drawer
        open={this.props.open}
        docked={false}
        width={130}
        onRequestChange={open => this.props.setOpen(open)}
        containerStyle={containerStyle}
        overlayStyle={overlayStyle}
      >
        <div style={listContainerStyle}>
          <List neos={this.props.neos} selectNeo={this.props.selectNeo}/>
        </div>
      </Drawer>
    );
  }
}

ListSectionResponsive.propTypes = {
  neos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  open: React.PropTypes.bool.isRequired,
  setOpen: React.PropTypes.func.isRequired,
  selectNeo: React.PropTypes.func.isRequired,
};
