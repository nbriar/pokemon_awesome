class CreateSprites < ActiveRecord::Migration
  def change
    create_table :sprites do |t|
      t.string :image
      t.string :name

      t.timestamps
    end
  end
end
