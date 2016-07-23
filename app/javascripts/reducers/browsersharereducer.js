import { GET_ANALYTICS } from '../actions';


export default function(state = {desktop: 0, mobile: 0, tablet: 0}, action) {

	switch(action.type) {
		case GET_ANALYTICS:
			return action.payload.data.devices;
	}

	return state;
}
