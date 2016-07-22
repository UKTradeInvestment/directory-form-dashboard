'use strict';

var config  = require('../../config');
var google = require('googleapis');



//return a an authenticated Google API client
function getJwtClient() {
	return new Promise(function(resolve, reject) {
		var jwtClient = new google.auth.JWT(config.ga.clientEmail, null, config.ga.privateKey, ['https://www.googleapis.com/auth/analytics.readonly'], null);
		jwtClient.authorize(function (error, tokens) {
			if (error) {
				console.log('getJwtClient failed: ' + error);
				reject(error);
			} else {
				resolve(jwtClient);
			}
		});
	});
}

//this is a test query to get the last year of data for a single view id
function getThisYearViewAnalytics(client, analytics, viewID) {

	return new Promise(function(resolve, reject) {

		function callback(error, response) {
			if (error) {
				console.log('getThisYearViewAnalytics failed: ' + error);
				reject(error);
			} else {
				resolve(response);
			}
		}

		analytics.data.ga.get({
				'auth': client,
				'ids': viewID,
				'metrics': 'ga:sessions,ga:pageviews,ga:users',
				'start-date': '365daysAgo',
				'end-date': 'today',
			},
			callback);
	});
}

// go get it all
function getData() {

	let client;
	let analytics;

	return getJwtClient()
		.then((jwtClient) => {
			client = jwtClient;
			analytics = google.analytics('v3');
			return getThisYearViewAnalytics(client, analytics, config.ga.viewID);
		});


		/*
		.then(function(result) {

			console.log('total users: ' + result.totalsForAllResults["ga:users"]);
			console.log('total sessions: ' + result.totalsForAllResults["ga:pageviews"]);
			console.log('total pageviews: ' + result.totalsForAllResults["ga:sessions"]);
			return getCurrentUsercount(client, analytics, viewID);
		})
		.then((result) => {
			console.log('Current users: ' + result.totalsForAllResults["rt.activeUsers"]);
		})
		.catch(function(error) {
			console.log("go promise chain failed", error);
		});
		 */
}


module.exports = {
	getData
};
