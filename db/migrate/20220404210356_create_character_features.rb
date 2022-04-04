class CreateCharacterFeatures < ActiveRecord::Migration[7.0]
  def change
    create_table :character_features do |t|
      t.belongs_to :character, index: true, foreign_key: true
      t.text :description
      t.string :feature_type
      t.string :name
      t.string :source
      t.timestamps
    end
  end
end
