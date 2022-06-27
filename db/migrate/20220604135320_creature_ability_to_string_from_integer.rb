class CreatureAbilityToStringFromInteger < ActiveRecord::Migration[7.0]
  def change
    change_column :creatures, :spellcasting_ability, :string
  end
end
