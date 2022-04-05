class AddCharacterSpellcasting < ActiveRecord::Migration[7.0]
  def change
    add_column :characters, :spell_slots_first, :integer
    add_column :characters, :spell_slots_second, :integer
    add_column :characters, :spell_slots_third, :integer
    add_column :characters, :spell_slots_fourth, :integer
    add_column :characters, :spell_slots_fifth, :integer
    add_column :characters, :spell_slots_sixth, :integer
    add_column :characters, :spell_slots_seventh, :integer
    add_column :characters, :spell_slots_eighth, :integer
    add_column :characters, :spell_slots_ninth, :integer
    add_column :characters, :spellcasting_ability, :string
    add_column :characters, :spellcasting_modifier, :integer
    add_column :characters, :spellcasting_save_dc, :integer
  end
end
