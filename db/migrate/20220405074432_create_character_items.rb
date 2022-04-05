class CreateCharacterItems < ActiveRecord::Migration[7.0]
  def change
    create_table :character_items do |t|
      t.belongs_to :character, index: true, foreign_key: true
      t.text :description
      t.string :name
      t.integer :total
      t.timestamps
    end
  end
end
