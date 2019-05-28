import AppDispatcher from '../dispatcher/dispatcher.js';
import weatherStore from '../stores/weather_store';

const RECEIVE_WEATHER_DATA = "RECEIVE_WEATHER_DATA";

describe('Test weatherStore', () => {
	let payLoad = {
			type: RECEIVE_WEATHER_DATA,
			data: []
	}

it('Store should listen for the actions', () => {
		AppDispatcher.dispatch(payLoad);
		let data = weatherStore.getForecast();
		expect(data).toEqual([]);
	});
})
