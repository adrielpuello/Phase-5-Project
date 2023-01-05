class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.integer :user_id
      t.integer :route_id
      t.string :rating
      t.string :ranking
      t.string :type
      t.string :name
      t.string :address
      t.string :phone
      t.string :website
      t.string :price_level
      t.timestamps
    end
  end
end
