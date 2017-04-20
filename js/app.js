

var app = angular.module('App', ['angular-loading-bar' , 'ngAnimate']);

/* Template Configuration */
app.config(function(cfpLoadingBarProvider) {
	cfpLoadingBarProvider.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>';
	cfpLoadingBarProvider.loadingBarTemplate = '<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>';
});


/* Include Bar */
app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
}]);

/* Include Spinner */
app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
}]);




app.controller('bodyController', ['$scope', function ($scope) {

    $scope.input = {
        heading : "Boiler Plate "
    };
}]);