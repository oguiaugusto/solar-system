import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions">
          {missions.map((mission) => {
            const { name, year, country, destination } = mission;
            const allProps = {
              name,
              year,
              country,
              destination,
            };
            return <MissionCard key={ name } { ...allProps } />;
            /* Source: https://stackoverflow.com/questions/51148064/reacts-props-with-the-same-name-as-their-value */
          })}
        </div>
      </div>
    );
  }
}

export default Missions;
