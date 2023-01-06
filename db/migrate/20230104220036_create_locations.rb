class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :event_type
      t.string :address
      t.timestamps
    end
  end
end
