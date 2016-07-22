import React, { Component } from 'react';
import rd3 from 'rd3';

export default class BrowserShare extends Component {

	render() {
		const PieChart = rd3.PieChart;

		var pieData = [
			{
				label: "Desktop",
				value: 70.0
			}, {
				label: "Tablet",
				value: 20.0
			}, {
				label: "Phone",
				value: 25.0
			}];

		return (
			<PieChart
				data={pieData}
				width={700}
				height={500}
				radius={210}
				innerRadius={20}
				sectorBorderColor="white"/>
		);
	}

}
