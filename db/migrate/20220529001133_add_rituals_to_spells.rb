class AddRitualsToSpells < ActiveRecord::Migration[7.0]
  def change
    add_column :spells, :ritual, :boolean
  end
end
