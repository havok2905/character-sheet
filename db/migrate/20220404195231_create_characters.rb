class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|

      # Base Character

      t.integer :ac
      t.text :background
      t.string :character_class
      t.integer :character_class_hit_dice
      t.integer :character_class_level
      t.string :character_sub_class
      t.text :condition_immunities
      t.text :condition_resistances
      t.text :condition_vulnerabilities
      t.text :damage_immunities
      t.text :damage_resistances
      t.text :damage_vulnerabilities
      t.integer :hp
      t.integer :initiative
      t.string :languages
      t.string :multiclass_class
      t.integer :multiclass_class_hit_dice
      t.integer :multiclass_class_level
      t.string :multiclass_sub_class
      t.integer :passive_perception
      t.integer :proficiency_bonus
      t.string :race
      t.text :senses
      t.integer :speed
      t.string :sub_race

      # Proficiencies
      t.text :armor_proficiencies
      t.text :tool_proficiencies
      t.text :weapon_proficiencies
      
      # Bio

      t.integer :age
      t.text :bonds
      t.string :eyes
      t.text :flaws
      t.string :hair
      t.string :height
      t.text :ideals
      t.string :name
      t.text :personality_traits
      t.string :skin
      t.string :weight

      # Abilities

      t.integer :charisma_score
      t.integer :constitution_score
      t.integer :dexterity_score
      t.integer :intelligence_score
      t.integer :strength_score
      t.integer :wisdom_score

      t.integer :charisma_mod
      t.integer :constitution_mod
      t.integer :dexterity_mod
      t.integer :intelligence_mod
      t.integer :strength_mod
      t.integer :wisdom_mod

      t.integer :charisma_save
      t.integer :constitution_save
      t.integer :dexterity_save
      t.integer :intelligence_save
      t.integer :strength_save
      t.integer :wisdom_save

      t.string :charisma_prof
      t.string :constitution_prof
      t.string :dexterity_prof
      t.string :intelligence_prof
      t.string :strength_prof
      t.string :wisdom_prof

      # Skills

      t.integer :acrobatics_mod
      t.integer :animal_handling_mod
      t.integer :arcana_mod
      t.integer :athletics_mod
      t.integer :deception_mod
      t.integer :history_mod
      t.integer :insight_mod
      t.integer :intimidation_mod
      t.integer :investigation_mod
      t.integer :medicine_mod
      t.integer :nature_mod
      t.integer :perception_mod
      t.integer :performance_mod
      t.integer :persuasion_mod
      t.integer :religion_mod
      t.integer :sleight_of_hand_mod
      t.integer :stealth_mod
      t.integer :survival_mod

      t.string :acrobatics_prof
      t.string :animal_handling_prof
      t.string :arcana_prof
      t.string :athletics_prof
      t.string :deception_prof
      t.string :history_prof
      t.string :insight_prof
      t.string :intimidation_prof
      t.string :investigation_prof
      t.string :medicine_prof
      t.string :nature_prof
      t.string :perception_prof
      t.string :performance_prof
      t.string :persuasion_prof
      t.string :religion_prof
      t.string :sleight_of_hand_prof
      t.string :stealth_prof
      t.string :survival_prof

      # Timestamps

      t.timestamps
    end
  end
end
