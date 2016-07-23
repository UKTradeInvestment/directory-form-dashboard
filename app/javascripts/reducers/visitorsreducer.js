import { GET_ANALYTICS } from '../actions';


export default function(state = {today: 0, week: 0, now: 0}, action) {

	switch(action.type) {
		case GET_ANALYTICS:
			return {
				today: parseInt(action.payload.data.today.sessions, 10),
				week: parseInt(action.payload.data.week.sessions, 10),
				now: parseInt(action.payload.data.now, 10)
			}
	}

	return state;

}
