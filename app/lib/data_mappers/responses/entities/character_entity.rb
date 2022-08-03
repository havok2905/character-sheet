# frozen_string_literal: true

module DataMappers
  module Responses
    module Entities
      class CharacterEntity < DataMappers::Responses::Entities::BaseEntity
        def run(character)
          image_url = get_image_url character, :image

          {
            ac: character.ac,
            acrobaticsMod: character.acrobatics_mod,
            acrobaticsProf: character.acrobatics_prof,
            age: character.age,
            alignment: character.alignment,
            animalHandlingMod: character.animal_handling_mod,
            animalHandlingProf: character.animal_handling_prof,
            arcanaMod: character.arcana_mod,
            arcanaProf: character.arcana_prof,
            athleticsMod: character.athletics_mod,
            athleticsProf: character.athletics_prof,
            armorProficiencies: character.armor_proficiencies,
            background: character.background,
            backstory: character.backstory,
            bonds: character.bonds,
            characterClass: character.character_class,
            characterClassHitDice: character.character_class_hit_dice,
            characterClassLevel: character.character_class_level,
            characterAttacks: character_attacks_response(character),
            characterFeatures: character_features_response(character),
            characterFeatureResources: charcter_feature_resources_response(character),
            characterItems: character_items_response(character),
            characterSubClass: character.character_sub_class,
            charismaMod: character.charisma_mod,
            charismaProf: character.charisma_prof,
            charismaSave: character.charisma_save,
            charismaScore: character.charisma_score,
            conditionImmunities: character.condition_immunities,
            conditionResistances: character.condition_resistances,
            conditionVulnerabilities: character.condition_vulnerabilities,
            constitutionMod: character.constitution_mod,
            constitutionProf: character.constitution_prof,
            constitutionSave: character.constitution_save,
            constitutionScore: character.constitution_score,
            copperPieces: character.copper_pieces,
            damageImmunities: character.damage_immunities,
            damageResistances: character.damage_resistances,
            damageVulnerabilities: character.damage_vulnerabilities,
            deceptionMod: character.deception_mod,
            deceptionProf: character.deception_prof,
            dexterityMod: character.dexterity_mod,
            dexterityProf: character.dexterity_prof,
            dexteritySave: character.dexterity_save,
            dexterityScore: character.dexterity_score,
            electrumPieces: character.electrum_pieces,
            eyes: character.eyes,
            flaws: character.flaws,
            goldPieces: character.gold_pieces,
            hair: character.hair,
            height: character.height,
            historyMod: character.history_mod,
            historyProf: character.history_prof,
            hp: character.hp,
            id: character.id,
            ideals: character.ideals,
            imageUrl: image_url,
            initiative: character.initiative,
            insightMod: character.insight_mod,
            insightProf: character.insight_prof,
            intelligenceMod: character.intelligence_mod,
            intelligenceProf: character.intelligence_prof,
            intelligenceSave: character.intelligence_save,
            intelligenceScore: character.intelligence_score,
            intimidationMod: character.intimidation_mod,
            intimidationProf: character.intimidation_prof,
            investigationMod: character.investigation_mod,
            investigationProf: character.investigation_prof,
            languages: character.languages,
            medicineMod: character.medicine_mod,
            medicineProf: character.medicine_prof,
            multiclassClass: character.multiclass_class,
            multiclassClassHitDice: character.multiclass_class_hit_dice,
            multiclassClassLevel: character.multiclass_class_level,
            multiclassSubClass: character.multiclass_sub_class,
            passivePerception: character.passive_perception,
            proficiencyBonus: character.proficiency_bonus,
            name: character.name,
            natureMod: character.nature_mod,
            natureProf: character.nature_prof,
            perceptionMod: character.perception_mod,
            perceptionProf: character.perception_prof,
            performanceMod: character.performance_mod,
            performanceProf: character.performance_prof,
            personalityTraits: character.personality_traits,
            persuasionMod: character.persuasion_mod,
            persuasionProf: character.persuasion_prof,
            platinumPieces: character.platinum_pieces,
            race: character.race,
            religionMod: character.religion_mod,
            religionProf: character.religion_prof,
            senses: character.senses,
            silverPieces: character.silver_pieces,
            skin: character.skin,
            sleightOfHandMod: character.sleight_of_hand_mod,
            sleightOfHandProf: character.sleight_of_hand_prof,
            speed: character.speed,
            spellSlotsFirst: character.spell_slots_first,
            spellSlotsSecond: character.spell_slots_second,
            spellSlotsThird: character.spell_slots_third,
            spellSlotsFourth: character.spell_slots_fourth,
            spellSlotsFifth: character.spell_slots_fifth,
            spellSlotsSixth: character.spell_slots_sixth,
            spellSlotsSeventh: character.spell_slots_seventh,
            spellSlotsEighth: character.spell_slots_eighth,
            spellSlotsNinth: character.spell_slots_ninth,
            spellcastingAbility: character.spellcasting_ability,
            spellcastingModifier: character.spellcasting_modifier,
            spellcastingSaveDc: character.spellcasting_save_dc,
            stealthMod: character.stealth_mod,
            stealthProf: character.stealth_prof,
            strengthMod: character.strength_mod,
            strengthProf: character.strength_prof,
            strengthSave: character.strength_save,
            strengthScore: character.strength_score,
            subRace: character.sub_race,
            survivalMod: character.survival_mod,
            survivalProf: character.survival_prof,
            toolProficiencies: character.tool_proficiencies,
            weaponProficiencies: character.weapon_proficiencies,
            weight: character.weight,
            wisdomMod: character.wisdom_mod,
            wisdomProf: character.wisdom_prof,
            wisdomSave: character.wisdom_save,
            wisdomScore: character.wisdom_score
          }
        end

        private

        def character_attacks_response(character)
          character_attacks = character.character_attacks || []

          character_attacks.map do |character_attack|
            {
              attackBonus: character_attack.attack_bonus,
              critRange: character_attack.crit_range,
              damageDiceRoll: character_attack.damage_dice_roll,
              damageTwoDiceRoll: character_attack.damage_two_dice_roll,
              damageTwoType: character_attack.damage_two_type,
              damageType: character_attack.damage_type,
              description: character_attack.description,
              id: character_attack.id,
              isSavingThrow: character_attack.is_saving_throw,
              name: character_attack.name,
              range: character_attack.range,
              savingThrowDescription: character_attack.saving_throw_description,
              savingThrowThreshold: character_attack.saving_throw_threshold,
              savingThrowType: character_attack.saving_throw_type
            }
          end
        end

        def character_features_response(character)
          character_features = character.character_features || []

          character_features.map do |character_feature|
            {
              description: character_feature.description,
              id: character_feature.id,
              name: character_feature.name,
              source: character_feature.source
            }
          end
        end

        def charcter_feature_resources_response(character)
          character_feature_resources = character.character_feature_resources || []

          character_feature_resources.map do |character_feature_resource|
            {
              id: character_feature_resource.id,
              name: character_feature_resource.name,
              total: character_feature_resource.total
            }
          end
        end

        def character_items_response(character)
          character_items = character.character_items || []

          character_items.map do |character_item|
            {
              id: character_item.id,
              name: character_item.name,
              total: character_item.total
            }
          end
        end
      end
    end
  end
end
