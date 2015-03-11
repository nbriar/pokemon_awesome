var controllers;

pokemon = angular.module('pokemon', [
'templates', 
'ngRoute', 
'ngResource',
'ngAnimate',
'ngSanitize', 
'controllers', 
'angular-flash.service', 
'angular-flash.flash-alert-directive', 
'ui',
'ui.tree', 
'ui.bootstrap',
'ui.sortable',
'dialogs.main',

]);

pokemon.config([
  '$routeProvider', 'flashProvider', function($routeProvider, flashProvider) {
    flashProvider.errorClassnames.push("alert-danger");
    flashProvider.warnClassnames.push("alert-warning");
    flashProvider.infoClassnames.push("alert-info");
    flashProvider.successClassnames.push("alert-success");

    return $routeProvider.when('/', {
      templateUrl: "index.html",
      controller: 'HomeController'
    });

  }
]);



controllers = angular.module('controllers', []);
