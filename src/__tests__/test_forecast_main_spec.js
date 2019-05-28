import React from 'react';
import { shallow, mount } from 'enzyme';
import ForecastMain from '../components/forecast/forecast_main.jsx';

describe('Test ForeCastMain Component', () => {

const test_data =
{"cod":"200","message":0.0048,"cnt":40,"list":[{"dt":1559034000,"main":{"temp":34.24,"temp_min":34.24,"temp_max":35.48,"pressure":1004.51,"sea_level":1004.51,"grnd_level":911.4,"humidity":32,"temp_kf":-1.24},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":48},"wind":{"speed":3.8,"deg":322.982},"sys":{"pod":"d"},"dt_txt":"2019-05-28 21:00:00"},{"dt":1559433600,"main":{"temp":24.12,"temp_min":24.12,"temp_max":24.12,"pressure":1007.82,"sea_level":1007.82,"grnd_level":913.03,"humidity":80,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":4.81,"deg":263.485},"sys":{"pod":"n"},"dt_txt":"2019-06-02 00:00:00"},{"dt":1559444400,"main":{"temp":27.04,"temp_min":27.04,"temp_max":27.04,"pressure":1010.57,"sea_level":1010.57,"grnd_level":915.86,"humidity":63,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":86},"wind":{"speed":4.61,"deg":283.027},"sys":{"pod":"d"},"dt_txt":"2019-06-02 03:00:00"},{"dt":1559455200,"main":{"temp":32.35,"temp_min":32.35,"temp_max":32.35,"pressure":1008.99,"sea_level":1008.99,"grnd_level":914.81,"humidity":42,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":90},"wind":{"speed":4.54,"deg":265.38},"sys":{"pod":"d"},"dt_txt":"2019-06-02 06:00:00"}],"city":{"id":1277935,"name":"Bāgalūr","coord":{"lat":12.8333,"lon":77.8667},"country":"IN","timezone":19800}};

  it('ForeCastMain should have expected class associated', () => {
		const foreCastApp = shallow(<ForecastMain/>);
		expect(foreCastApp).toBeDefined();
		expect(foreCastApp.hasClass('forecast-main container')).toEqual(true);
	});

  it('Component should invoke the function to fetch data', () => {
  let onWillMount = jest.fn();
  ForecastMain.prototype.componentWillMount = onWillMount;
  const container = mount(<ForecastMain forecast={test_data}/>);
  expect(onWillMount).toBeCalled();
})
})
