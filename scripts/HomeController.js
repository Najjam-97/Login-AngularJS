var app = angular.module('LoginApp');
app.controller('HomeController',
    function($scope, $rootScope, $stateParams, $state, LoginService) {
        $scope.user = $rootScope.userName;
    });