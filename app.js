'use strict';

var express = require('express');
var app = express();
var nunjucks = require('express-nunjucks');
var filters = require('./node_modules/govstrap/nunjucks/filters');
var compression = require('compression');

var apiController = require('./app/controllers/api');

const config = require('./config');

app.use(compression());

let nunjucksConfig = {
	autoescape: true
};

if (config.env !== 'production') {
	nunjucksConfig.noCache = true;
}

app.set('view engine', 'html');
app.set('views', [
	`${__dirname}/app/views`,
	`${__dirname}/node_modules/govuk_template_jinja/views`,
	`${__dirname}/node_modules/govstrap/nunjucks`
]);

console.log(`TEMPLATES: ${__dirname}/node_modules/govuk_template_jinja/views`);


nunjucks.setup(nunjucksConfig, app);

// Add extra filters to nunjucks
nunjucks.ready((nj) => {
	Object.keys(filters).forEach((filterName) => {
		nj.addFilter(filterName, filters[filterName]);
	});
});

// Insert usefull variables into response for all controllers
app.use(require(`${__dirname}/app/middleware/locals`));
app.use('/images', express.static(`${__dirname}/node_modules/govuk_frontend_toolkit/images`));
app.use('/images', express.static(`${__dirname}/node_modules/govstrap/images`));
app.use('/javascripts', express.static(`${__dirname}/node_modules/govstrap/public/javascripts`));
app.use('/fonts', express.static(`${__dirname}/node_modules/govuk_template_mustache/assets/stylesheets`));
app.use(express.static(`${__dirname}/app/public`));
app.use(express.static(`${__dirname}/build`));
app.use(express.static(`${__dirname}/node_modules/govuk_template_jinja/assets`));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/data', apiController.getAnalyticsData);


app.listen(config.port);
