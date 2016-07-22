import React, { Component } from 'react';

export const TodayWeekCount = props => {
	return (
		<div className="data-module">
			<h2 className="bold-omglarge">
				{ props.dayTotal } / { props.weekTotal }
			</h2>
			<p className="bold-xxxlarge">
				{ props.label } today / week
			</p>
		</div>
	);
};

TodayWeekCount.propTypes = {
	dayTotal: React.PropTypes.number,
	weekTotal: React.PropTypes.number,
	label: React.PropTypes.string
};
