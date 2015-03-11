class AddPokeidToSprite < ActiveRecord::Migration
  def change
    add_column :sprites, :national_id, :integer
  end
end
