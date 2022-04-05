# frozen_string_literal: true

module Types
  class CharacterType < Types::BaseObject
    field :id, ID, null: false
    field :ac, Integer
    field :background, String
    field :character_class, String
    field :character_class_hit_dice, Integer
    field :character_class_level, Integer
    field :character_sub_class, String
    field :condition_immunities, String
    field :condition_resistances, String
    field :condition_vulnerabilities, String
    field :damage_immunities, String
    field :damage_resistances, String
    field :damage_vulnerabilities, String
    field :hp, Integer
    field :initiative, Integer
    field :languages, String
    field :multiclass_class, String
    field :multiclass_class_hit_dice, Integer
    field :multiclass_class_level, Integer
    field :multiclass_sub_class, String
    field :passive_perception, Integer
    field :proficiency_bonus, Integer
    field :race, String
    field :senses, String
    field :speed, Integer
    field :sub_race, String
    field :armor_proficiencies, String
    field :tool_proficiencies, String
    field :weapon_proficiencies, String
    field :age, Integer
    field :bonds, String
    field :eyes, String
    field :flaws, String
    field :hair, String
    field :height, String
    field :ideals, String
    field :name, String
    field :personality_traits, String
    field :skin, String
    field :weight, String
    field :charisma_score, Integer
    field :constitution_score, Integer
    field :dexterity_score, Integer
    field :intelligence_score, Integer
    field :strength_score, Integer
    field :wisdom_score, Integer
    field :charisma_mod, Integer
    field :constitution_mod, Integer
    field :dexterity_mod, Integer
    field :intelligence_mod, Integer
    field :strength_mod, Integer
    field :wisdom_mod, Integer
    field :charisma_save, Integer
    field :constitution_save, Integer
    field :dexterity_save, Integer
    field :intelligence_save, Integer
    field :strength_save, Integer
    field :wisdom_save, Integer
    field :charisma_prof, String
    field :constitution_prof, String
    field :dexterity_prof, String
    field :intelligence_prof, String
    field :strength_prof, String
    field :wisdom_prof, String
    field :acrobatics_mod, Integer
    field :animal_handling_mod, Integer
    field :arcana_mod, Integer
    field :athletics_mod, Integer
    field :deception_mod, Integer
    field :history_mod, Integer
    field :insight_mod, Integer
    field :intimidation_mod, Integer
    field :investigation_mod, Integer
    field :medicine_mod, Integer
    field :nature_mod, Integer
    field :perception_mod, Integer
    field :performance_mod, Integer
    field :persuasion_mod, Integer
    field :religion_mod, Integer
    field :sleight_of_hand_mod, Integer
    field :stealth_mod, Integer
    field :survival_mod, Integer
    field :acrobatics_prof, String
    field :animal_handling_prof, String
    field :arcana_prof, String
    field :athletics_prof, String
    field :deception_prof, String
    field :history_prof, String
    field :insight_prof, String
    field :intimidation_prof, String
    field :investigation_prof, String
    field :medicine_prof, String
    field :nature_prof, String
    field :perception_prof, String
    field :performance_prof, String
    field :persuasion_prof, String
    field :religion_prof, String
    field :sleight_of_hand_prof, String
    field :stealth_prof, String
    field :survival_prof, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :character_attacks, [Types::CharacterAttackType], null: false
    field :character_feature_resources, [Types::CharacterFeatureResourceType]
    field :character_features, [Types::CharacterFeatureType], null: false
  end
end
