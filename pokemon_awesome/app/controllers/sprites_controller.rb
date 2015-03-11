class SpritesController < ApplicationController
require 'json'
  def index
   #cache the data in the database
    for i in 1..30
      
      if !Sprite.exists? id:i
       temp = Pokegem.get "sprite", i
        if !temp.blank?
          temp = JSON.parse(temp);
          sprite = Sprite.new
          sprite.id = i
          sprite.name = temp["name"]
          sprite.image = 'http://pokeapi.co'+temp["image"]
          sprite.save
        end
       else
        sprite = Sprite.find(i)
        if sprite.name.blank?
         temp = Pokegem.get "sprite", i
         temp = JSON.parse(temp);
          
          sprite.name = temp["name"].split('_').first
          sprite.save
        end
       end         
       
    end
    
    if params[:keywords]
        
        @sprites = Sprite.where("name LIKE ?", "%#{params[:keywords]}%")
    else
        @sprites = Sprite.all
    end
  end
   
   
  def show
    @sprite = Sprite.find(params[:id])
  end

end
