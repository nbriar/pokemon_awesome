var controllers;

controllers = angular.module('controllers');
	
	
controllers.controller("SpritesController", [
  '$scope', '$routeParams', '$location', '$resource', '$modal', '$log', '$http', 'dialogs',
  function($scope, $routeParams, $location, $resource, $modal, $log, $http, $dialogs) {
    var Sprite;
	
	    //build resources for the backend
	    Sprite = $resource('/sprites/:spriteId', {
	      method: 'GET',
	      spriteId: "@id",
	      format: 'json',
	    });

	    //initialize the page with all sprites      
	    if ($routeParams.keywords) {
	    	Sprite.query({
	        keywords: $routeParams.keywords
	      }, function(results) {
	          output = [];
	          results.forEach(function(element){
	            output.push(element);
	          });
	        return $scope.sprites = output;
	      });
	    } 
	    else {
	       Sprite.query({}, function(results) {
	        return $scope.sprites = results;
	      });
	    } 

	    
	
	
	    $scope.search = function(keywords) {
	      return $location.path("/").search('keywords', keywords);
	    };

	    $scope.getInfo = function(sprite){
	        var modalInstance = $modal.open({
		          templateUrl: 'info.html',
		          controller: 'PokemonController',
		          scope: $scope,
		          resolve: {
			            items: function () {
			            	return sprite.id;
			            }	
		          },
		          backdrop: true,
		        });
		    
		        modalInstance.result.then(function (selectedItem) {
		          $scope.selected = selectedItem;
		        }, function () {});
	    };

  }
]);
