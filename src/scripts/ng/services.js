define(['angular', 'config/app'], function (angular, app) {
  return angular.module('app.services', ['ngResource'])
    .factory('PaymentService', ['$resource', function ($resource) {
      return $resource(app.apiHost + '/payment/:id', {}, {
        getAll: { isArray: true }
      });
    }])

    .factory('UserService', ['$resource', function ($resource) {
      return $resource(app.apiHost + '/user/:id', {}, {
        getAll: { isArray: true }
      });
    }]);
});