import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAnalytics } from '../actions';
import { BrowserShare } from '../components/browsershare';
import { TodayWeekCount } from '../components/todayweekcount';
import { DataModule } from '../components/datamodule';


class Dashboard extends Component {

	componentWillMount() {
		this.props.getAnalytics();
	}

	render() {

		const visitors = this.props.visitors;
		const submissions = this.props.submissions;

		return (
			<div className="grow-row">
				<div className="column-one-half">
					<DataModule total={visitors.now} description={'Visitors Now'}/>
					<TodayWeekCount dayTotal={visitors.today} weekTotal={visitors.week} label={'Visitors'}/>
					<TodayWeekCount dayTotal={submissions.today} weekTotal={submissions.week} label={'Submissions'}/>
				</div>
				<div className="column-one-half">
					<BrowserShare data={this.props.browsershare}/>
				</div>
			</div>
		);
	}

	static propTypes = {
		getAnalytics: React.PropTypes.func,
		visitors: React.PropTypes.object,
		submissions: React.PropTypes.object,
		browsershare: React.PropTypes.object
	}

}

function mapStateToProps({ visitors, submissions, browsershare }) {
	return { visitors, submissions, browsershare };
}

export default connect(mapStateToProps, { getAnalytics })(Dashboard);
