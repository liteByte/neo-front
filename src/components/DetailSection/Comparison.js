import React, {Component} from "react";

export default class Comparison extends Component {

  entities = [
    {
      text: 'an elephant',
      img: 'elefante',
      size: 4,
    },
    {
      text: 'a blue whale',
      img: 'ballena',
      size: 25,
    },
    {
      text: 'a brachiosaurus',
      img: 'braquiosaurio',
      size: 26,
    },
    {
      text: 'a walrus',
      img: 'morsa',
      size: 3,
    },
    {
      text: 'a python',
      img: 'piton',
      size: 7,
    },
    {
      text: 'the Great Pyramid of Giza',
      img: 'piramide',
      size: 139,
    },
    {
      text: 'a football pitch',
      img: 'cancha',
      size: 120,
    },
    {
      text: 'the Colosseum',
      img: 'coliseo',
      size: 48,
    },
    {
      text: 'the Eiffel tower',
      img: 'eiffel',
      size: 300,
    },
    {
      text: 'the Big Ben',
      img: 'bigben',
      size: 96,
    },
  ];

  constructor(props) {
    super(props);
    this.updateState(props);
  }

  updateState(props) {
    const size = props.data;

    let possible = [];
    for (let i = 0; i < this.entities.length; i++) {
      const entity = this.entities[i];
      entity.ratio = size / entity.size;
      if (entity.ratio >= 1) possible.push(entity);
    }

    possible = possible.sort((a, b) => {
      if (a.ratio === b.ratio) return 0;
      return a.ratio < b.ratio ? -1 : 1;
    });

    let selected;
    if (possible.length > 0) {
      const n = possible.length < 3 ? possible.length : 3;
      const pick = Math.round(Math.random() * (n - 1));
      selected = possible[pick];
    } else {
      selected = this.entities[Math.round(Math.random() * (this.entities.length - 1))];
    }

    this.state = {
      selected,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data)
      this.updateState(nextProps);
  }

  render() {
    return (
      <div className="comparison-container">
        <div className="row">
          <div className="image">
            <img
              src={`/assets/entities/${this.state.selected.img}.svg`}
              alt={this.state.selected.text}
              height="100%"/>
          </div>
          <div className="number-container">
            <div className="number">x{Math.round(this.state.selected.ratio)}</div>
          </div>
        </div>
        <div className="description">times the size of {this.state.selected.text} </div>
      </div>
    );
  }
}

Comparison.propTypes = {
  data: React.PropTypes.number.isRequired,
};
