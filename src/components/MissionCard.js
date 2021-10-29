import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <p>
          <span className="mission-name" data-testid="mission-name">{name}</span>
          <span> | </span>
          <span className="mission-year" data-testid="mission-year">{year}</span>
        </p>
        <p className="mission-country" data-testid="mission-country">{country}</p>
        <p className="mission-destination" data-testid="mission-destination">
          {destination}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
