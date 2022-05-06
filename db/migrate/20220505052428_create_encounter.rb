class CreateEncounter < ActiveRecord::Migration[7.0]
  def change
    create_table :encounters do |t|
      t.text :description
      t.string :name

      t.timestamps
    end

    create_table :encounter_phases do |t|
      t.belongs_to :encounter, index: true, foreign_key: true

      t.text :description
      t.string :name

      t.timestamps
    end
  end
end
