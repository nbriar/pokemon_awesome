var controllers;

controllers = angular.module('controllers');

controllers.controller("PokemonController", [
  '$scope', '$routeParams', '$resource', '$location', 'flash', '$modalInstance','items', 'dialogs', 
  function($scope, $routeParams, $resource, $location, flash, $modalInstance, items, $dialogs) {
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
        $scope.pokemonId=items;
    }
 
    
    if ($scope.pokemonId) {
    	Pokemon.get({
    		pokemonId: $scope.pokemonId
      }, (function(pokemon) {
    	  Sprite.get({
    		 spriteId: $scope.pokemonId 
    	  }, (function(sprite){return $scope.sprite = sprite;}));
    	  
        return $scope.pokemon = pokemon;
      }), (function(httpResponse) {
        $scope.pokemon = null;
        return flash.error = "There is no pokemon with ID " + $routeParams.pokemonId;
      }));
    } else {
      $scope.pokemon = {};
    }
    
  
    
  }
]);