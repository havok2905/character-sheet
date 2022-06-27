class AddPinsAndMapsToLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :maps do |t|
      t.belongs_to :location, index: true, foreign_key: true
      t.timestamps
    end

    create_table :pins do |t|
      t.belongs_to :map, index: true, foreign_key: true
      t.integer :x
      t.integer :y
      t.timestamps
    end
  end
end
