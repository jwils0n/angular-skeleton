define(['lodash', 'angular'], function (_, angular) {
	return angular.module('app.controllers', [])
		.controller('MainCtrl', ['$scope', 'UserService', 'PaymentService', function ($scope, UserService, PaymentService) {
      $scope.activeUsers = [];
      $scope.order = 'id';

      UserService.getAll(function (users) {
        $scope.users = users;
      });

      $scope.deactivate = function (user) {
        $scope.activeUsers = _.reject($scope.activeUsers, { id: user.id });
      };

      $scope.sort = function (field) {
        $scope.order = field;
      };
    }])

    .controller('ListCtrl', ['$scope', 'UserService', function ($scope, UserService) {
      $scope.isActive = function (user) {
        return _.indexOf($scope.$parent.activeUsers, user) !== -1;
      };

      $scope.activate = function (user) {
        $scope.$parent.activeUsers.push(user);
      };

      $scope.delete = function (user) {
        UserService.remove({ id: user.id }, function () {
          $scope.users = _.reject($scope.users, { id: user.id });
        });
      };
    }]);
});