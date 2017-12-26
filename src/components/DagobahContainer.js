import React from 'react';
import PlanetView from './PlanetView.js';

class DagobahContainer extends React.Component {

// State:
// { loading: true }
// { loading: false, planet: { name, climate, terrain } }
// { loading: false, error: any }

  state = { loading: true };

  componentDidMount() {
    fetch("https://swapi.co/api/planets/5")
    .then(res => res.json())
    .then(
      planet => this.setState({ loading: false, planet}),
      error => this.setState({ loading: false, error})
    );
  }

  render() {
    return (<PlanetView {...this.state} />);
  }
}

export default DagobahContainer;
