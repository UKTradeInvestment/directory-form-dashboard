import React from 'react';
import rd3 from 'rd3';

export const BrowserShare = props =>  {

	const PieChart = rd3.PieChart;

	// convert the pie chart raw data into percentages
	const total = props.data.desktop + props.data.mobile + props.data.tablet;

	if (total === 0) {
		return <div>Loading...</div>;
	}

	var pieData = [
		{
			label: "Desktop",
			value: Math.round((props.data.desktop/total) * 100)
		}, {
			label: "Mobile",
			value: Math.round((props.data.mobile/total) * 100)
		}, {
			label: "Tablet",
			value: Math.round((props.data.tablet/total) * 100)
		}];


	return (
		<PieChart
			data={pieData}
			width={700}
			height={500}
			radius={200}
			innerRadius={20}
			sectorBorderColor="white"/>
	);

};

BrowserShare.propTypes = {
	data: React.PropTypes.object
};
