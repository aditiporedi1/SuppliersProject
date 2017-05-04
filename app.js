'use strict';

angular.module('suppliersApp', [
	'ngRoute',
    'ngResource',
    'suppliersApp.services',
    'suppliersApp.controllers'
]).config(function($routeProvider) {
	  $routeProvider.when('/', {templateUrl: 'partial/list.html', controller: 'EventsCtrl'});
	  $routeProvider.otherwise({redirectTo: '/'});
	})
.filter("dateFilter", function () {
    return function (item) {
        if (item != null) {
            return new Date(parseInt(item.substr(6)));
        }
        return "";
    };
});;
