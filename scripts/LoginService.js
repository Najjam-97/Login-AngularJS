var app = angular.module('LoginApp');
app.factory('LoginService', function() {
    var user = 'marketplace@martcart.pk';
    var pass = '12345';
    var isAuthenticated = false;
    return {
        login: function (username, password) {
            isAuthenticated = username === user && password === pass;
            return isAuthenticated;
        },
        isAuthenticated: function () {
            return isAuthenticated;
        }
    };
});