class CreateCharacterFeatureResources < ActiveRecord::Migration[7.0]
  def change
    create_table :character_feature_resources do |t|
      t.belongs_to :character, index: true, foreign_key: true
      t.string :name
      t.integer :total
      t.timestamps
    end
  end
end
