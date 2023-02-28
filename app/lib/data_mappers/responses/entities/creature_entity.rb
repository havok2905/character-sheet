# frozen_string_literal: true

module DataMappers
  module Responses
    module Entities
      class CreatureEntity < DataMappers::Responses::Entities::BaseEntity
        def run(creature)
          image_url = creature.public_image_path

          {
            ac: creature.ac,
            acrobaticsProf: creature.acrobatics_prof,
            alignment: creature.alignment,
            animalHandlingProf: creature.animal_handling_prof,
            arcanaProf: creature.arcana_prof,
            armor: creature.armor,
            athleticsProf: creature.athletics_prof,
            backstory: creature.backstory,
            bonds: creature.bonds,
            charismaProf: creature.charisma_prof,
            charismaScore: creature.charisma_score,
            conditionImmunities: creature.condition_immunities,
            conditionResistances: creature.condition_resistances,
            conditionVulnerabilities: creature.condition_vulnerabilities,
            constitutionProf: creature.constitution_prof,
            constitutionScore: creature.constitution_score,
            cr: creature.cr,
            creatureActions: creature_actions_response(creature),
            creatureCategory: creature.creature_category,
            creatureFeatures: creature_features_response(creature),
            creatureLairActions: creature_lair_actions_response(creature),
            creatureLegendaryActions: creature_legendary_actions_response(creature),
            creatureRegionalEffects: creature_regional_effects_response(creature),
            creatureType: creature.creature_type,
            damageImmunities: creature.damage_immunities,
            damageResistances: creature.damage_resistances,
            damageVulnerabilities: creature.damage_vulnerabilities,
            deceptionProf: creature.deception_prof,
            description: creature.description,
            dexterityProf: creature.dexterity_prof,
            dexterityScore: creature.dexterity_score,
            flaws: creature.flaws,
            historyProf: creature.history_prof,
            hp: creature.hp,
            id: creature.id,
            ideals: creature.ideals,
            imageUrl: image_url,
            insightProf: creature.insight_prof,
            intelligenceProf: creature.intelligence_prof,
            intelligenceScore: creature.intelligence_score,
            intimidationProf: creature.intimidation_prof,
            investigationProf: creature.investigation_prof,
            jackOfAllTrades: creature.jack_of_all_trades,
            languages: creature.languages,
            lairActionsText: creature.lair_actions_text,
            legendaryActionsText: creature.legendary_actions_text,
            medicineProf: creature.medicine_prof,
            name: creature.name,
            natureProf: creature.nature_prof,
            perceptionProf: creature.perception_prof,
            performanceProf: creature.performance_prof,
            personalityTraits: creature.personality_traits,
            persuasionProf: creature.persuasion_prof,
            regionalEffectsText: creature.regional_effects_text,
            religionProf: creature.religion_prof,
            senses: creature.senses,
            size: creature.size,
            sleightOfHandProf: creature.sleight_of_hand_prof,
            speed: creature.speed,
            spellcastingAbility: creature.spellcasting_ability,
            spellcastingLevel: creature.spellcasting_level,
            stealthProf: creature.stealth_prof,
            strengthProf: creature.strength_prof,
            strengthScore: creature.strength_score,
            survivalProf: creature.survival_prof,
            wisdomProf: creature.wisdom_prof,
            wisdomScore: creature.wisdom_score
          }
        end

        private

        def creature_actions_response(creature)
          creature_actions = creature.creature_actions || []

          creature_actions.map do |creature_action|
            {
              id: creature_action.id,
              description: creature_action.description,
              actionType: creature_action.action_type,
              actionCombatType: creature_action.action_combat_type,
              attackBonus: creature_action.attack_bonus,
              damageDiceRoll: creature_action.damage_dice_roll,
              damageTwoDiceRoll: creature_action.damage_two_dice_roll,
              damageTwoType: creature_action.damage_two_type,
              damageType: creature_action.damage_type,
              name: creature_action.name,
              range: creature_action.range,
              savingThrowDc: creature_action.saving_throw_dc,
              savingThrowType: creature_action.saving_throw_type
            }
          end
        end

        def creature_features_response(creature)
          creature_features = creature.creature_features || []

          creature_features.map do |creature_feature|
            {
              id: creature_feature.id,
              description: creature_feature.description,
              name: creature_feature.name
            }
          end
        end

        def creature_lair_actions_response(creature)
          creature_lair_actions = creature.creature_lair_actions || []

          creature_lair_actions.map do |creature_lair_action|
            {
              id: creature_lair_action.id,
              description: creature_lair_action.description
            }
          end
        end

        def creature_legendary_actions_response(creature)
          creature_legendary_actions = creature.creature_legendary_actions || []

          creature_legendary_actions.map do |creature_legendary_action|
            {
              id: creature_legendary_action.id,
              description: creature_legendary_action.description,
              name: creature_legendary_action.name
            }
          end
        end

        def creature_regional_effects_response(creature)
          creature_regional_effects = creature.creature_regional_effects || []

          creature_regional_effects.map do |creature_regional_effect|
            {
              id: creature_regional_effect.id,
              description: creature_regional_effect.description
            }
          end
        end
      end
    end
  end
end
