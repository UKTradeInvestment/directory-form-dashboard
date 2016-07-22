import React from 'react';

export const DataModule = props => {
	return (
		<div className="data-module">
			<h2 className="bold-omglarge">{ props.total }</h2>
			<p className="bold-xxxlarge">{ props.description }</p>
		</div>
	);
};

DataModule.propTypes = {
	total: React.PropTypes.number,
	description: React.PropTypes.string
};
