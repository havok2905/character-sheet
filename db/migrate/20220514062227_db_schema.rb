class DbSchema < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.integer :ac
      t.integer :acrobatics_mod
      t.string :acrobatics_prof
      t.integer :age
      t.string :alignment
      t.integer :animal_handling_mod
      t.string :animal_handling_prof
      t.integer :arcana_mod
      t.string :arcana_prof
      t.integer :athletics_mod
      t.string :athletics_prof
      t.text :armor_proficiencies
      t.text :background
      t.text :bonds
      t.string :character_class
      t.integer :character_class_hit_dice
      t.integer :character_class_level
      t.string :character_sub_class
      t.integer :charisma_mod
      t.string :charisma_prof
      t.integer :charisma_save
      t.integer :charisma_score
      t.text :condition_immunities
      t.text :condition_resistances
      t.text :condition_vulnerabilities
      t.integer :constitution_mod
      t.string :constitution_prof
      t.integer :constitution_save
      t.integer :constitution_score
      t.integer :copper_pieces
      t.text :damage_immunities
      t.text :damage_resistances
      t.text :damage_vulnerabilities
      t.integer :deception_mod
      t.string :deception_prof    
      t.integer :dexterity_mod
      t.string :dexterity_prof
      t.integer :dexterity_save
      t.integer :dexterity_score
      t.integer :electrum_pieces
      t.string :eyes
      t.text :flaws
      t.integer :gold_pieces
      t.string :hair
      t.string :height
      t.integer :history_mod
      t.string :history_prof
      t.integer :insight_mod
      t.integer :hp
      t.text :ideals
      t.integer :initiative
      t.string :insight_prof
      t.integer :intelligence_mod
      t.string :intelligence_prof
      t.integer :intelligence_save
      t.integer :intelligence_score
      t.integer :intimidation_mod
      t.string :intimidation_prof
      t.integer :investigation_mod
      t.string :investigation_prof
      t.string :languages
      t.integer :medicine_mod
      t.string :medicine_prof
      t.string :multiclass_class
      t.integer :multiclass_class_hit_dice
      t.integer :multiclass_class_level
      t.string :multiclass_sub_class
      t.integer :passive_perception
      t.integer :proficiency_bonus
      t.string :name
      t.integer :nature_mod
      t.string :nature_prof
      t.integer :perception_mod
      t.string :perception_prof
      t.integer :performance_mod
      t.string :performance_prof
      t.text :personality_traits
      t.integer :persuasion_mod
      t.string :persuasion_prof
      t.integer :platinum_pieces
      t.string :race
      t.integer :religion_mod
      t.string :religion_prof
      t.text :senses
      t.integer :silver_pieces
      t.string :skin
      t.integer :sleight_of_hand_mod
      t.string :sleight_of_hand_prof
      t.integer :spell_slots_eighth
      t.integer :spell_slots_fifth
      t.integer :spell_slots_first
      t.integer :spell_slots_fourth
      t.integer :spell_slots_ninth
      t.integer :spell_slots_second
      t.integer :spell_slots_seventh
      t.integer :spell_slots_sixth
      t.integer :spell_slots_third
      t.string :spellcasting_ability
      t.integer :spellcasting_modifier
      t.integer :spellcasting_save_dc
      t.integer :stealth_mod
      t.string :stealth_prof
      t.integer :strength_mod
      t.string :strength_prof
      t.integer :strength_save
      t.integer :strength_score
      t.integer :speed
      t.string :sub_race
      t.integer :survival_mod
      t.string :survival_prof
      t.text :tool_proficiencies
      t.text :weapon_proficiencies
      t.string :weight
      t.integer :wisdom_mod
      t.string :wisdom_prof
      t.integer :wisdom_save
      t.integer :wisdom_score
      t.timestamps
    end

    create_table :character_attacks do |t|
      t.belongs_to :character, index: true, foreign_key: true
      t.integer :attack_bonus
      t.integer :crit_range
      t.string :damage_dice_roll
      t.string :damage_two_dice_roll
      t.string :damage_two_type
      t.string :damage_type
      t.text :description
      t.boolean :is_saving_throw
      t.string :name
      t.string :range
      t.text :saving_throw_description
      t.integer :saving_throw_threshold
      t.string :saving_throw_type
      t.timestamps
    end

    create_table :character_feature_resources do |t|
      t.belongs_to :character, index: true, foreign_key: true
      t.string :name
      t.integer :total
      t.timestamps
    end

    create_table :character_features do |t|
      t.belongs_to :character, index: true, foreign_key: true
      t.text :description
      t.string :feature_type
      t.string :name
      t.string :source
      t.timestamps
    end

    create_table :character_items do |t|
      t.belongs_to :character, index: true, foreign_key: true
      t.text :description
      t.string :name
      t.integer :total
      t.timestamps
    end

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
      t.float :cr
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

    create_table :spells do |t|
      t.belongs_to :character, index: true, foreign_key: true
      t.belongs_to :creature, index: true, foreign_key: true
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

    create_join_table :characters, :spells do |t|
      t.index :character_id
      t.index :spell_id
    end

    create_join_table :creatures, :spells do |t|
      t.index :creature_id
      t.index :spell_id
    end

    create_join_table :characters, :creatures do |t|
      t.index :character_id
      t.index :creature_id
    end
  end
end
