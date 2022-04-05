class CreateCharacterSpells < ActiveRecord::Migration[7.0]
  def change
    create_table :character_spells do |t|
      t.belongs_to :character, index: true, foreign_key: true
      t.string :casting_time
      t.string :components
      t.boolean :concentration
      t.text :description
      t.text :description_higher_levels
      t.string :duration
      t.integer :level
      t.boolean :material_components
      t.string :name
      t.string :range
      t.string :school
      t.boolean :somatic_components
      t.string :target
      t.boolean :verbal_components
      t.timestamps
    end
  end
end
