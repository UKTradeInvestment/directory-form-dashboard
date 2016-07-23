import {combineReducers} from 'redux';
import VisitorsReducer from './visitorsreducer';
import SubmissionsReducer from './submissionsreducer';
import BrowsershareReducer from './browsersharereducer';

const rootReducer = combineReducers({
	visitors: VisitorsReducer,
	submissions: SubmissionsReducer,
	browsershare: BrowsershareReducer
});

export default rootReducer;
