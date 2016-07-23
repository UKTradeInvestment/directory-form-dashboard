import { GET_ANALYTICS } from '../actions';


export default function(state = {today: 0, week: 0, now: 0}, action) {

	switch(action.type) {
		case GET_ANALYTICS:
			return {
				today: parseInt(action.payload.data.today['ga:users'],10),
				week: parseInt(action.payload.data.week['ga:users']),
				now: parseInt(action.payload.data.now['rt:ActiveUsers'])
			}
	}

	return state;

}
