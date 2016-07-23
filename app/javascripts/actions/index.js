import axios from 'axios';

export const GET_ANALYTICS = 'GET_ANALYTICS';


export function getAnalytics() {
	return {
		type: GET_ANALYTICS,
		payload: axios.get('/data')
	}
}
