class CreateCreatures < ActiveRecord::Migration[7.0]
  def change
    create_table :creatures do |t|
      t.integer :ac
      t.string :alignment
      t.string :armor
      t.text :bonds
      t.integer :charisma_mod
      t.integer :charisma_save
      t.integer :charisma_score
      t.text :condition_immunities
      t.text :condition_resistances
      t.text :condition_vulnerabilities
      t.integer :constitution_mod
      t.integer :constitution_save
      t.integer :constitution_score
      t.integer :cr
      t.string :creature_category
      t.string :creature_type
      t.text :damage_immunities
      t.text :damage_resistances
      t.text :damage_vulnerabilities
      t.text :description
      t.integer :dexterity_mod
      t.integer :dexterity_save
      t.integer :dexterity_score
      t.text :flaws
      t.integer :hp
      t.text :ideals
      t.integer :intelligence_mod
      t.integer :intelligence_save
      t.integer :intelligence_score
      t.string :languages
      t.text :lair_actions_text
      t.text :legendary_actions_text
      t.string :name
      t.text :personality_traits
      t.text :regional_effects_text
      t.text :senses
      t.string :size
      t.text :skills
      t.string :speed
      t.integer :spell_slots_first
      t.integer :spell_slots_second
      t.integer :spell_slots_third
      t.integer :spell_slots_fourth
      t.integer :spell_slots_fifth
      t.integer :spell_slots_sixth
      t.integer :spell_slots_seventh
      t.integer :spell_slots_eighth
      t.integer :spell_slots_ninth
      t.integer :spellcasting_ability
      t.integer :spellcasting_level
      t.integer :spellcasting_modifier
      t.integer :spellcasting_save_dc
      t.integer :strength_mod
      t.integer :strength_save
      t.integer :strength_score  
      t.integer :wisdom_mod
      t.integer :wisdom_save
      t.integer :wisdom_score

      t.timestamps
    end

    create_table :creature_actions do |t|
      t.belongs_to :creature, index: true, foreign_key: true
      t.text :description
      t.string :action_type
      t.string :action_combat_type
      t.integer :attack_bonus
      t.string :damage_dice_roll
      t.string :damage_two_dice_roll
      t.string :damage_two_type
      t.string :damage_type
      t.string :name
      t.string :range
      t.integer :saving_throw_dc
      t.string :saving_throw_type

      t.timestamps
    end

    create_table :creature_features do |t|
      t.belongs_to :creature, index: true, foreign_key: true
      t.text :description
      t.string :feature_type
      t.string :name

      t.timestamps
    end

    create_table :creature_lair_actions do |t|
      t.belongs_to :creature, index: true, foreign_key: true
      t.text :description

      t.timestamps
    end

    create_table :creature_legendary_actions do |t|
      t.belongs_to :creature, index: true, foreign_key: true
      t.text :description
      t.string :name

      t.timestamps
    end

    create_table :creature_regional_effects do |t|
      t.belongs_to :creature, index: true, foreign_key: true
      t.text :description

      t.timestamps
    end
  end
end
