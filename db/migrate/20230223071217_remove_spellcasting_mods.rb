class RemoveSpellcastingMods < ActiveRecord::Migration[7.0]
  def change
    remove_column :characters, :spellcasting_modifier
    remove_column :characters, :spellcasting_save_dc

    remove_column :creatures, :spellcasting_modifier
    remove_column :creatures, :spellcasting_save_dc
  end
end
