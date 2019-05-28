import React from 'react';
import { shallow, mount } from 'enzyme';
import WeatherForecastApp from '../components/main/weather_forecast_app.jsx';

jest.mock('../components/search/search_bar.jsx', () => 'SearchBar');
describe('Test Weather Component', () => {
	it('It should have the child components', () => {
		const wrapper = mount(<WeatherForecastApp/>);
     expect(wrapper.find('SearchBar').length).toEqual(1)
   	});

})
