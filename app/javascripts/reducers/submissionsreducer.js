import { GET_ANALYTICS } from '../actions';


export default function(state = {today: 0, week: 0, now: 0}, action) {

	switch(action.type) {
		case GET_ANALYTICS:
			return {
				today: parseInt(action.payload.data.today.submissions, 10),
				week: parseInt(action.payload.data.week.submissions, 10)
			}
	}

	return state;

}
