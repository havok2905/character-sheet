class RemoveCreatureSpellslots < ActiveRecord::Migration[7.0]
  def change
    remove_column :characters, :spell_slots_first
    remove_column :characters, :spell_slots_second
    remove_column :characters, :spell_slots_third
    remove_column :characters, :spell_slots_fourth
    remove_column :characters, :spell_slots_fifth
    remove_column :characters, :spell_slots_sixth
    remove_column :characters, :spell_slots_seventh
    remove_column :characters, :spell_slots_eighth
    remove_column :characters, :spell_slots_ninth
    
    remove_column :creatures, :spell_slots_first
    remove_column :creatures, :spell_slots_second
    remove_column :creatures, :spell_slots_third
    remove_column :creatures, :spell_slots_fourth
    remove_column :creatures, :spell_slots_fifth
    remove_column :creatures, :spell_slots_sixth
    remove_column :creatures, :spell_slots_seventh
    remove_column :creatures, :spell_slots_eighth
    remove_column :creatures, :spell_slots_ninth
  end
end
