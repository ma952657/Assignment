import React from 'react';
import ForecastIndex from '../forecast/forecast_index.jsx';

class ForecastMain extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="forecast-main container">


        <ForecastIndex forecast={ this.props.forecast } />
      </div>
    );
  }
}

export default ForecastMain;
