var app = angular.module('LoginApp');
app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
    $rootScope.title = "AngularJS Login ";
    $scope.formSubmit = function() {
        if(LoginService.login($scope.username, $scope.password)) {
            $rootScope.userName = $scope.username;
            $scope.error = '';
            $scope.username = '';
            $scope.password = '';
            $scope.required='';
            $state.transitionTo('home');
        } else {
            $scope.error = "Incorrect username/password !";
            $scope.required="Field Required!";
        }
    };
});