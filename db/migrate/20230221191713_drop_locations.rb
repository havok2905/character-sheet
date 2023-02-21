class DropLocations < ActiveRecord::Migration[7.0]
  def change
    drop_join_table :articles, :tags
    
    drop_join_table :creatures, :factions
    drop_join_table :characters, :factions

    drop_join_table :creatures, :pins
    drop_join_table :factions, :pins
    drop_join_table :magic_items, :pins

    drop_table :articles
    drop_table :tags
    drop_table :factions
    drop_table :pins
    drop_table :maps
    drop_table :locations
  end
end
