class PokemonsController < ApplicationController
require 'json'  
  def show
    @pokemon = Pokegem.get "pokemon", params[:id]
    if !@pokemon.blank?
      render json: @pokemon
    else
      raise 'error'
    end
  end

end
