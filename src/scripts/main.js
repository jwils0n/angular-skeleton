require.config({
	paths: {
		templates: '../templates',

		angular: '../bower_components/angular/angular',
    angularRoute: '../bower_components/angular-route/angular-route',
    angularResource: '../bower_components/angular-resource/angular-resource',
		jquery: '../bower_components/jquery/dist/jquery',
		lodash: '../bower_components/lodash/dist/lodash',
		moment: '../bower_components/moment/moment',
		bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
		text: '../bower_components/requirejs-text/text'
	},

	shim: {
		angular: {
			exports: 'angular',
			deps: ['jquery']
		},

    angularRoute: ['angular'],
    angularResource: ['angular'],

		jquery: {
			exports: '$'
		},

		hogan: {
			exports: 'Hogan'
		},

		bootstrap: ['jquery']
	},

	waitSeconds: 60,

	deps: ['init']
});