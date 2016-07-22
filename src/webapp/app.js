
var config = require( './config' );

var express = require( 'express' );
var nunjucks = require( 'nunjucks' );
var serveStatic = require( 'serve-static' );
var path = require( 'path' );
var logger = require( 'morgan' );

var routes = require( './routes' );

var app = express();
var serverConfig = config.server;
var pathToPublic = path.resolve( __dirname, '../public' );
var env = app.get( 'env' );
var isDev = ( 'development' === env );

//app.engine( 'html', swig.render );
app.set( 'view engine', 'html' );
app.set( 'views', __dirname + '/views' );

app.set( 'view cache', config.views.cache );

nunjucks.configure(app.get('views'), {
    autoescape: true,
    noCache: true,
    watch: true,
    express: app
});

app.use( logger( ( isDev ? 'dev' : 'combined' ) ) );

routes( express, app );

app.use( '/public', serveStatic( pathToPublic ) );

app.listen( serverConfig.port, function(){

	console.log( '\nApp running in %s mode\nListening at http://127.0.0.1:%s', env, serverConfig.port );
});