class CreateFactions < ActiveRecord::Migration[7.0]
  def change
    create_table :factions do |t|
      t.string :alignment
      t.text :allies
      t.text :description
      t.text :goals
      t.text :ideals
      t.string :name
      t.text :rivals
      t.timestamps
    end

    create_join_table :creatures, :factions do |t|
      t.index :creature_id
      t.index :faction_id
    end

    create_join_table :characters, :factions do |t|
      t.index :character_id
      t.index :faction_id
    end
  end
end
