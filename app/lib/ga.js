'use strict';

var config  = require('../../config');
var google = require('googleapis');

const TODAY = 'today';
const LASTWEEK = '7daysAgo';


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

function getViewAnalytics(client, analytics, viewID, startDate, endDate) {

	return new Promise(function(resolve, reject) {

		function callback(error, response) {
			if (error) {
				console.log('getViewAnalytics failed: ' + error);
				reject(error);
			} else {
				resolve(response);
			}
		}

		analytics.data.ga.get({
				'auth': client,
				'ids': viewID,
				'metrics': 'ga:users',
				'start-date': startDate,
				'end-date': endDate,
				'dimensions': 'ga:deviceCategory'
			},
			callback);
	});

}

function getRightNow(client, analytics, viewID) {

	return new Promise(function(resolve, reject) {

		function callback(error, response) {
			if (error) {
				console.log('getRightNow failed: ' + error);
				reject(error);
			} else {
				resolve(response);
			}
		}

		analytics.data.realtime.get({
				'auth': client,
				'ids': viewID,
				'metrics': 'rt:ActiveUsers'
			},
			callback);
	});

}

// go get it all
function getData() {

	let client;
	let analytics = google.analytics('v3');
	let combinedResults = {};

	return getJwtClient()
		.then((jwtClient) => {
			client = jwtClient;
			return getViewAnalytics(client, analytics, config.ga.viewID, TODAY, TODAY);
		})
		.then((result) => {
			combinedResults.today = result.totalsForAllResults;
			return getViewAnalytics(client, analytics, config.ga.viewID, LASTWEEK, TODAY)
		})
		.then((result) => {
			combinedResults.week = result.totalsForAllResults;
			combinedResults.devices = {};
			for (const device of result.rows) {
				combinedResults.devices[device[0]] = parseInt(device[1], 10);
			}
			return getRightNow(client, analytics, config.ga.viewID);
		})
		.then((result) => {
			combinedResults.now = result.totalsForAllResults;
			return combinedResults;
		})
		.catch((error) => {
			console.log(error);
		});

}


module.exports = {
	getData
};
