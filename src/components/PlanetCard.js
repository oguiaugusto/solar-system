import React from 'react';
import PropTypes from 'prop-types';

class PlanetCards extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planet" data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img className="planet-img" src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCards.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCards;
