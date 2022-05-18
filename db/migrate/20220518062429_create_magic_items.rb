class CreateMagicItems < ActiveRecord::Migration[7.0]
  def change
    create_table :magic_items do |t|
      t.boolean :attunement
      t.string :category
      t.text :description
      t.string :rarity
      t.string :sub_category
      t.string :name
      t.timestamps
    end

    create_join_table :characters, :magic_items do |t|
      t.index :character_id
      t.index :magic_item_id
    end

    create_join_table :creatures, :magic_items do |t|
      t.index :creature_id
      t.index :magic_item_id
    end
  end
end
