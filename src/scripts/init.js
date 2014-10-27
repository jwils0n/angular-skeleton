define([
  'angular',
  'angularRoute',
  'angularResource',
  'bootstrap',
  'ng/controllers',
  'ng/services',
  'ng/directives'
], function (angular) {
  angular.module('app', [
    'ngRoute',
    'app.controllers',
    'app.services',
    'app.directives'
  ])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'templates/home.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);

  angular.bootstrap(document, ['app']);
});