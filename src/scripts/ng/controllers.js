define(['angular'], function (angular) {
	return angular.module('app.controllers', [])
		.controller('MainCtrl', ['$scope', function () {
      console.log('SCOPE');
    }]);
});