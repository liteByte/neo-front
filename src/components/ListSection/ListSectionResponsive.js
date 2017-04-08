import React, {Component} from "react";
import Drawer from "material-ui/Drawer";
import {GridList, GridTile} from "material-ui/GridList";
import Neo from "./Neo";

const cellSize = 100;

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '60px 10px'
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
};

const overlayStyle = {
  backgroundColor: "rgba(0, 0, 0, .15)"
};

export default class ListSectionResponsive extends Component {
  render() {
    return (
      <Drawer
        open={this.props.open}
        docked={false}
        width={120}
        onRequestChange={open => this.props.setOpen(open)}
        overlayStyle={overlayStyle}
      >
        <div style={styles.root}>
          <GridList cellHeight={cellSize} cols={0} style={styles.gridList}>
            {this.props.neos.map((neo, index) => (
              <GridTile key={index}>
                <Neo color={neo.color} terrain={neo.terrain} cellSize={cellSize}/>
              </GridTile>
            ))}
          </GridList>
        </div>
      </Drawer>
    );
  }
}

ListSectionResponsive.propTypes = {
  neos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  open: React.PropTypes.bool.isRequired,
  setOpen: React.PropTypes.func.isRequired,
};
