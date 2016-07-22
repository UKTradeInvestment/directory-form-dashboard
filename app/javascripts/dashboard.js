import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BrowserShare from './components/browsershare';
import { TodayWeekCount } from './components/todayweekcount';
import { DataModule } from './components/datamodule';


var thing = document.getElementById('content');
console.log(thing);

class Dashboard extends Component {
	render() {
		return (
			<div className="grow-row">
				<div className="column-one-half">
					<DataModule total={100} description={'Visitors Now'}/>
					<TodayWeekCount dayTotal={100} weekTotal={1000} label={'Visitors'}/>
					<TodayWeekCount dayTotal={100} weekTotal={1000} label={'Submissions'}/>
				</div>
				<div className="column-one-half">
					<BrowserShare/>
				</div>
			</div>
		);
	}
}


ReactDOM.render(<Dashboard/>, thing);


