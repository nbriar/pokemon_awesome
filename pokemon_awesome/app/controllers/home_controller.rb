class HomeController < ApplicationController
require 'json'

  def start
    
  end
  def index
    @sprites = Array.new
    for i in 1..30
      sprite = nil
      if Sprite.exists? id:i
        sprite = Sprite.find(i)
      end
      if sprite.blank?
       temp = Pokegem.get "sprite", i
       
        if !temp.blank?
          sprite = Sprite.new
          sprite.id = i
          sprite.image = 'http://pokeapi.co'+JSON.parse(temp)["image"]
          sprite.save
        end
       end
      @sprites<<sprite
    end
  end
end
