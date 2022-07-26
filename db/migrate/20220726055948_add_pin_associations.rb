class AddPinAssociations < ActiveRecord::Migration[7.0]
  def change
    create_join_table :pins, :creatures do |t|
      t.index :pin_id
      t.index :creature_id
    end

    create_join_table :pins, :factions do |t|
      t.index :pin_id
      t.index :faction_id
    end

    create_join_table :pins, :magic_items do |t|
      t.index :pin_id
      t.index :magic_item_id
    end
  end
end
