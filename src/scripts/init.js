define([
  'angular',
  'angularRoute',
  'bootstrap',
  'ng/controllers'
], function (angular) {
  angular.module('app', [
    'ngRoute',
    'app.controllers'
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