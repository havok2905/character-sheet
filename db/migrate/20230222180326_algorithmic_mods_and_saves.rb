class AlgorithmicModsAndSaves < ActiveRecord::Migration[7.0]
  def change
    remove_column :characters, :acrobatics_mod
    remove_column :characters, :animal_handling_mod
    remove_column :characters, :arcana_mod
    remove_column :characters, :athletics_mod
    remove_column :characters, :deception_mod
    remove_column :characters, :history_mod
    remove_column :characters, :insight_mod
    remove_column :characters, :intimidation_mod
    remove_column :characters, :investigation_mod
    remove_column :characters, :medicine_mod
    remove_column :characters, :nature_mod
    remove_column :characters, :perception_mod
    remove_column :characters, :performance_mod
    remove_column :characters, :persuasion_mod
    remove_column :characters, :religion_mod
    remove_column :characters, :sleight_of_hand_mod
    remove_column :characters, :stealth_mod
    remove_column :characters, :survival_mod

    remove_column :characters, :charisma_mod
    remove_column :characters, :charisma_save
    remove_column :characters, :constitution_mod
    remove_column :characters, :constitution_save
    remove_column :characters, :dexterity_mod
    remove_column :characters, :dexterity_save
    remove_column :characters, :intelligence_mod
    remove_column :characters, :intelligence_save
    remove_column :characters, :strength_mod
    remove_column :characters, :strength_save
    remove_column :characters, :wisdom_mod
    remove_column :characters, :wisdom_save

    remove_column :characters, :proficiency_bonus

    remove_column :creatures, :charisma_mod
    remove_column :creatures, :charisma_save
    remove_column :creatures, :constitution_mod
    remove_column :creatures, :constitution_save
    remove_column :creatures, :dexterity_mod
    remove_column :creatures, :dexterity_save
    remove_column :creatures, :intelligence_mod
    remove_column :creatures, :intelligence_save
    remove_column :creatures, :strength_mod
    remove_column :creatures, :strength_save
    remove_column :creatures, :wisdom_mod
    remove_column :creatures, :wisdom_save

    add_column :creatures, :charisma_prof, :string
    add_column :creatures, :constitution_prof, :string
    add_column :creatures, :dexterity_prof, :string
    add_column :creatures, :intelligence_prof, :string
    add_column :creatures, :strength_prof, :string
    add_column :creatures, :wisdom_prof, :string

    add_column :creatures, :acrobatics_prof, :string
    add_column :creatures, :animal_handling_prof, :string
    add_column :creatures, :arcana_prof, :string
    add_column :creatures, :athletics_prof, :string
    add_column :creatures, :deception_prof, :string
    add_column :creatures, :history_prof, :string
    add_column :creatures, :insight_prof, :string
    add_column :creatures, :intimidation_prof, :string
    add_column :creatures, :investigation_prof, :string
    add_column :creatures, :medicine_prof, :string
    add_column :creatures, :nature_prof, :string
    add_column :creatures, :perception_prof, :string
    add_column :creatures, :performance_prof, :string
    add_column :creatures, :persuasion_prof, :string
    add_column :creatures, :religion_prof, :string
    add_column :creatures, :sleight_of_hand_prof, :string
    add_column :creatures, :stealth_prof, :string
    add_column :creatures, :survival_prof, :string
  end
end
