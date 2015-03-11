var controllers;

controllers = angular.module('controllers');

controllers.controller("PokemonController", [
  '$scope', '$routeParams', '$resource', '$location', 'flash', '$modalInstance','items', 'dialogs', 
  function($scope, $routeParams, $resource, $location, flash, $modalInstance, items, $dialogs) {

	$scope.waiting = true;  
	var Pokemon;
    Pokemon = $resource('/pokemons/:pokemonId', {
      pokemonId: "@id",
      format: 'json'
    });     

    var Sprite;
    Sprite = $resource('/sprites/:spriteId', {
	      method: 'GET',
	      spriteId: "@id",
	      format: 'json',
	    });

    $scope.items = items;
    if(items){
        $scope.pokemonId=items.national_id;
        $scope.sprite = items;
    }
 
    
    if ($scope.pokemonId) {
    	Pokemon.get({
    		pokemonId: $scope.pokemonId
      }, (function(pokemon) {
      	  $scope.waiting = false;
        return $scope.pokemon = pokemon;
      }), (function(httpResponse) {
        $scope.pokemon = null;
        return flash.error = "There is no pokemon with ID " + $routeParams.pokemonId;
      }));
    } else {
  	  $scope.waiting = false;
      $scope.pokemon = {};
    }
    
  
    
  }
]);