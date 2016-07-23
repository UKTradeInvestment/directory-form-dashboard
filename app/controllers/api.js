'use strict';

var ga = require('../lib/ga');

function getAnalyticsData(req,res) {
	ga.getData()
		.then((data) => {
			res.json(data);
		})
		.catch((error) => {
			res.json({error});
		});
}


module.exports = { getAnalyticsData };
