import React, {Component} from "react";
import IconButton from "material-ui/IconButton";
import SvgIcon from "material-ui/SvgIcon";

const tileStyle = {
  height: '100%',
  padding: 1,
  boxSizing: 'border-box',
};

const buttonStyle = {
  width: '100%',
  height: '100%',
  padding: 8,
};

const iconStyle = {
  width: '100%',
  height: '100%',
};

export default class Neo extends Component {

  colors = [
    '#e93f60',
    '#8d1460',
    '#00ecd5',
    '#00ee9e',
  ];

  terrains = [
    <g>
      <path opacity="0.3" fill="#0B1B26" d="M96.668,53.108c0-7.917-6.416-14-14.334-14H20.735c-6.577,8-11.806,18-15.367,28h76.966
					C90.252,67.108,96.668,61.023,96.668,53.108z"/>
      <path opacity="0.3" fill="#0B1B26" d="M92.368,167.608c0,7.915,6.417,14.5,14.332,14.5h50.709c10.848-8,20.11-18,27.202-29H106.7
				C98.785,153.108,92.368,159.692,92.368,167.608z"/>
      <path opacity="0.3" fill="#0B1B26" d="M126.767,96.108h21.058c7.917,0,14.334-6.585,14.334-14.5c0-7.917-6.417-14.5-14.334-14.5
				h-21.058c-7.915,0-14.332,6.583-14.332,14.5C112.435,89.523,118.852,96.108,126.767,96.108z"/>
      <path opacity="0.3" fill="#0B1B26" d="M108.2,110.608c0-7.917-6.417-14.5-14.334-14.5H58.875c-7.915,0-14.332,6.583-14.332,14.5
				c0,7.915,6.417,14.5,14.332,14.5h34.991C101.783,125.108,108.2,118.523,108.2,110.608z"/>
      <path opacity="0.3" fill="#0B1B26" d="M36.846,139.108c0-7.917-6.417-14-14.333-14H3.088c2.608,10,6.802,19,12.3,28h7.124
				C30.429,153.108,36.846,147.023,36.846,139.108z"/>
      <path opacity="0.3" fill="#0B1B26" d="M117.287,22.608c0,7.916,6.417,14.5,14.332,14.5h45.835c-10.063-13-23.003-23-37.793-29
				h-8.042C123.704,8.108,117.287,14.692,117.287,22.608z"/>
      <path opacity="0.3" fill="#0B1B26" d="M166.463,110.608c0,7.915,6.417,14.5,14.332,14.5h16.117
				c2.015-8,3.088-16.418,3.088-24.959c0-1.282-0.032-3.041-0.08-4.041h-19.125C172.88,96.108,166.463,102.691,166.463,110.608z"/>
    </g>,
    <g>
      <path opacity="0.3" fill="#0B1B26" d="M120.685,30.608c0,7.917,6.418,14.5,14.335,14.5h48.335c-7.553-12-17.37-22-28.81-29
				H135.02C127.103,16.108,120.685,22.694,120.685,30.608z"/>
      <path opacity="0.3" fill="#0B1B26" d="M106.638,74.108c0-15.805-12.812-29-28.616-29H16.643C6.13,60.108,0,79.79,0,100.218
				c0,1.015,0.02,1.891,0.049,2.891h77.973C93.826,103.108,106.638,89.916,106.638,74.108z"/>
      <path opacity="0.3" fill="#0B1B26" d="M147.255,130.108c-15.808,0-28.622,12.695-28.622,28.5c0,15.807,12.814,28.5,28.622,28.5
				h1.007c21.875-12,38.741-32.04,46.701-56.127c-2.333-0.612-4.783-0.873-7.31-0.873H147.255z"/>
      <path opacity="0.3" fill="#0B1B26" d="M149.963,87.608c0,7.917,6.417,14.5,14.333,14.5h35.678c0.011-1,0.023-1.473,0.023-2.104
				c0-9.241-1.259-17.896-3.605-26.896h-32.096C156.38,73.108,149.963,79.693,149.963,87.608z"/>
      <path opacity="0.3" fill="#0B1B26" d="M77.704,130.108H55.191c-7.917,0-14.333,6.584-14.333,14.5c0,7.917,6.417,14.5,14.333,14.5
				h22.513c7.916,0,14.332-6.583,14.332-14.5C92.036,136.693,85.62,130.108,77.704,130.108z"/>
    </g>,
    <g>
      <path opacity="0.3" fill="#0B1B26" d="M48.326,52.999c0,7.915,6.417,14,14.334,14h131.972c-3.561-10-8.791-20-15.367-28H62.66
				C54.743,38.999,48.326,45.082,48.326,52.999z"/>
      <path opacity="0.3" fill="#0B1B26" d="M132.288,110.499c0-7.917-6.416-14.5-14.333-14.5H0.081c-0.048,1-0.08,2.759-0.08,4.041
				c0,8.541,1.073,16.959,3.088,24.959h114.866C125.872,124.999,132.288,118.414,132.288,110.499z"/>
      <path opacity="0.3" fill="#0B1B26" d="M148.66,110.499c0,7.915,6.419,14.5,14.337,14.5h33.914c2.015-8,3.088-16.418,3.088-24.959
				c0-1.282-0.032-3.041-0.08-4.041h-36.922C155.079,95.999,148.66,102.582,148.66,110.499z"/>
      <path opacity="0.3" fill="#0B1B26" d="M107.858,167.499c0,7.915,6.416,14.5,14.333,14.5h35.219c10.847-8,20.11-18,27.201-29
				h-62.42C114.274,152.999,107.858,159.583,107.858,167.499z"/>
      <path opacity="0.3" fill="#0B1B26" d="M86.028,167.499c0-7.917-6.419-14.5-14.334-14.5H15.388c7.091,11,16.354,21,27.201,29
				h29.104C79.609,181.999,86.028,175.414,86.028,167.499z"/>
    </g>,
    <g>
      <circle opacity="0.3" fill="#0B1B26" cx="69.475" cy="73.901" r="28.619"/>
      <path opacity="0.3" fill="#0B1B26" d="M164.542,45.267c5.859,0,11.305-1.764,15.841-4.785
				C169.501,25.801,154.693,14.208,137.51,7.25c-1.022,2.944-1.587,6.104-1.587,9.397C135.923,32.454,148.737,45.267,164.542,45.267
				z"/>
      <path opacity="0.3" fill="#0B1B26" d="M142.312,145.674c0,14.146,6.806,26.701,17.322,34.571
				c23.239-17.292,38.714-44.436,40.238-75.25c-4.507-1.597-9.354-2.474-14.409-2.474
				C161.634,102.521,142.312,121.84,142.312,145.674z"/>
      <path opacity="0.3" fill="#0B1B26" d="M127.882,73.658c-7.972,0-14.432,6.461-14.432,14.431c0,7.97,6.46,14.431,14.432,14.431
				c7.967,0,14.431-6.461,14.431-14.431C142.312,80.12,135.849,73.658,127.882,73.658z"/>
      <path opacity="0.3" fill="#0B1B26" d="M73.8,131.116c-7.973,0-14.432,6.46-14.432,14.43s6.459,14.431,14.432,14.431
				c7.967,0,14.43-6.461,14.43-14.431S81.767,131.116,73.8,131.116z"/>
      <path opacity="0.3" fill="#0B1B26" d="M19.665,116.951c0-7.97-6.459-14.43-14.431-14.43c-1.824,0-3.562,0.352-5.167,0.969
				c0.336,9.709,2.056,19.067,4.968,27.882c0.067,0.001,0.132,0.01,0.199,0.01C13.206,131.382,19.665,124.92,19.665,116.951z"/>
    </g>,
    <g>
      <circle opacity="0.3" fill="#0B1B26" cx="56.328" cy="131.382" r="28.619"/>
      <path opacity="0.3" fill="#0B1B26" d="M37.773,74.128c15.807,0,28.619-12.812,28.619-28.619c0-13.849-9.836-25.398-22.904-28.047
				c-13.82,9.485-25.139,22.35-32.761,37.406C14.606,66.077,25.248,74.128,37.773,74.128z"/>
      <path opacity="0.3" fill="#0B1B26" d="M132.646,188.62c0,1.95,0.196,3.853,0.567,5.693c16.994-5.983,31.885-16.426,43.268-29.927
				c-4.408-2.774-9.623-4.384-15.217-4.384C145.459,160.001,132.646,172.814,132.646,188.62z"/>
      <path opacity="0.3" fill="#0B1B26" d="M146.835,74.128c17.396,0,32.378-10.3,39.208-25.13
				C171.147,23.91,145.6,5.893,115.629,1.188c-7.397,7.746-11.948,18.232-11.948,29.788
				C103.681,54.809,123.003,74.128,146.835,74.128z"/>
      <path opacity="0.3" fill="#0B1B26" d="M161.264,131.382c7.973,0,14.431-6.462,14.431-14.432s-6.458-14.43-14.431-14.43
				c-7.967,0-14.43,6.46-14.43,14.43S153.297,131.382,161.264,131.382z"/>
      <path opacity="0.3" fill="#0B1B26" d="M20.242,87.854c0-7.97-6.461-14.431-14.431-14.431c-0.783,0-1.548,0.08-2.298,0.2
				C1.228,82.018,0,90.849,0,99.969c0,0.366,0.01,0.729,0.013,1.095c1.775,0.78,3.735,1.221,5.799,1.221
				C13.781,102.285,20.242,95.824,20.242,87.854z"/>
      <circle opacity="0.3" fill="#0B1B26" cx="103.806" cy="87.854" r="14.431"/>
      <circle opacity="0.3" fill="#0B1B26" cx="116.14" cy="145.57" r="14.431"/>
      <path opacity="0.3" fill="#0B1B26" d="M89.376,188.863c-5.768,0-10.73,3.392-13.04,8.282c7.586,1.841,15.509,2.824,23.662,2.824
				c1.136,0,2.266-0.026,3.392-0.063C101.862,193.573,96.177,188.863,89.376,188.863z"/>
    </g>,
    <g>
      <path opacity="0.3" fill="#0B1B26" d="M199.999,99.792c0-15.269-3.427-29.61-9.546-42.61H9.546C3.428,70.181,0,84.523,0,99.792
				c0,4.911,0.36,10.39,1.045,14.39h197.909C199.639,110.181,199.999,104.703,199.999,99.792z"/>
      <path opacity="0.3" fill="#0B1B26" d="M190.29,143.181H9.709c5.116,11,12.084,20,20.489,28h139.604
				C178.206,163.181,185.174,154.181,190.29,143.181z"/>
      <path opacity="0.3" fill="#0B1B26" d="M105.953,0.181H94.046c-24.969,1-47.475,12-64.205,29h140.317
				C153.428,12.181,130.923,1.181,105.953,0.181z"/>
    </g>,
  ];

  constructor(props) {
    super(props);

    this.state = props.data;
  }

  getArticleStyle = () => {
    tileStyle.width = this.props.cellSize;
    return tileStyle;
  };

  getColor = (i) => {
    return this.colors[i];
  };

  getTerrain = (i) => {
    return this.terrains[i];
  };

  getBase = (color) => {
    return <circle fill={color} cx="100" cy="100" r="100"/>
  };

  getPosition = () => {
    const center = this.props.cellSize / 2;
    const diameter = this.props.cellSize * this.state.display.size;
    return center - diameter / 2;
  };

  getSize = () => {
    return this.state.display.size * 100 + "%";
  };

  render() {
    return (
      <article style={this.getArticleStyle()}>
        <IconButton
          style={buttonStyle}
          iconStyle={iconStyle}
          onClick={() => this.props.selectNeo ? this.props.selectNeo(this.props.data) : null}
        >
          <SvgIcon viewBox="0 0 100 100">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x={this.getPosition()} y={this.getPosition()}
              width={this.getSize()} height={this.getSize()}
              viewBox="0 0 200 200" enableBackground="new 0 0 200 200">
              {this.getBase(this.getColor(this.state.color))}
              {this.getTerrain(this.state.terrain)}
            </svg>
          </SvgIcon>
        </IconButton>
      </article>
    );
  }
}

Neo.propTypes = {
  data: React.PropTypes.object.isRequired,
  cellSize: React.PropTypes.number.isRequired,
  selectNeo: React.PropTypes.func,
};
