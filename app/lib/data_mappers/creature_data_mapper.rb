module DataMappers
  class CreatureDataMapper < DataMappers::BaseDataMapper
    def run creature
      image_url = get_image_url creature, :image

      {
        ac: creature.ac,
        alignment: creature.alignment,
        armor: creature.armor,
        backstory: creature.backstory,
        bonds: creature.bonds,
        charismaMod: creature.charisma_mod,
        charismaSave: creature.charisma_save,
        charismaScore: creature.charisma_score,
        conditionImmunities: creature.condition_immunities,
        conditionResistances: creature.condition_resistances,
        conditionVulnerabilities: creature.condition_vulnerabilities,
        constitutionMod: creature.constitution_mod,
        constitutionSave: creature.constitution_save,
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
        description: creature.description,
        dexterityMod: creature.dexterity_mod,
        dexteritySave: creature.dexterity_save,
        dexterityScore: creature.dexterity_score,
        factions: factions_response(creature),
        flaws: creature.flaws,
        hp: creature.hp,
        id: creature.id,
        ideals: creature.ideals,
        imageUrl: image_url,
        intelligenceMod: creature.intelligence_mod,
        intelligenceSave: creature.intelligence_save,
        intelligenceScore: creature.intelligence_score,
        languages: creature.languages,
        lairActionsText: creature.lair_actions_text,
        legendaryActionsText: creature.legendary_actions_text,
        magicItems: magic_items_response(creature),
        name: creature.name,
        personalityTraits: creature.personality_traits,
        regionalEffectsText: creature.regional_effects_text,
        senses: creature.senses,
        size: creature.size,
        skills: creature.skills,
        speed: creature.speed,
        spells: spells_response(creature),
        spellSlotsFirst: creature.spell_slots_first,
        spellSlotsSecond: creature.spell_slots_second,
        spellSlotsThird: creature.spell_slots_third,
        spellSlotsFourth: creature.spell_slots_fourth,
        spellSlotsFifth: creature.spell_slots_fifth,
        spellSlotsSixth: creature.spell_slots_sixth,
        spellSlotsSeventh: creature.spell_slots_seventh,
        spellSlotsEighth: creature.spell_slots_eighth,
        spellSlotsNinth: creature.spell_slots_ninth,
        spellcastingAbility: creature.spellcasting_ability,
        spellcastingLevel: creature.spellcasting_level,
        spellcastingModifier: creature.spellcasting_modifier,
        spellcastingSaveDc: creature.spellcasting_save_dc,
        strengthMod: creature.strength_mod,
        strengthSave: creature.strength_save,
        strengthScore: creature.strength_score,
        wisdomMod: creature.wisdom_mod,
        wisdomSave: creature.wisdom_save,
        wisdomScore: creature.wisdom_score
      }
    end
  
    private

    def creature_actions_response creature
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

    def creature_features_response creature
      creature_features = creature.creature_features || []

      creature_features.map do |creature_feature|
        {
          id: creature_feature.id,
          description: creature_feature.description,
          name: creature_feature.name
        }
      end
    end

    def creature_lair_actions_response creature
      creature_lair_actions = creature.creature_lair_actions || []

      creature_lair_actions.map do |creature_lair_action|
        {
          id: creature_lair_action.id,
          description: creature_lair_action.description
        }
      end
    end

    def creature_legendary_actions_response creature
      creature_legendary_actions = creature.creature_legendary_actions || []

      creature_legendary_actions.map do |creature_legendary_action|
        {
          id: creature_legendary_action.id,
          description: creature_legendary_action.description,
          name: creature_legendary_action.name
        }
      end
    end

    def creature_regional_effects_response creature
      creature_regional_effects = creature.creature_regional_effects || []

      creature_regional_effects.map do |creature_regional_effect|
        {
          id: creature_regional_effect.id,
          description: creature_regional_effect.description
        }
      end
    end

    def factions_response creature
      factions = creature.factions || []

      factions.map do |faction|
        image_url = get_image_url faction, :image

        {
          alignment: faction.alignment,
          allies: faction.allies,
          description: faction.description,
          goals: faction.goals,
          id: faction.id,
          ideals: faction.ideals,
          imageUrl: image_url,
          name: faction.name,
          rivals: faction.rivals
        }
      end
    end

    def magic_items_response creature
      magic_items = creature.magic_items || []

      magic_items.map do |magic_item|
        image_url = get_image_url magic_item, :image

        {
          attunement: magic_item.attunement,
          category: magic_item.category,
          description: magic_item.description,
          id: magic_item.id,
          imageUrl: image_url,
          rarity: magic_item.rarity,
          subCategory: magic_item.sub_category,
          name: magic_item.name
        }
      end
    end

    def spells_response creature
      spells = creature.spells || []

      spells.map do |spell|
        {
          castingTime: spell.casting_time,
          components: spell.components,
          concentration: spell.concentration,
          description: spell.description,
          descriptionHigherLevels: spell.description_higher_levels,
          duration: spell.duration,
          id: spell.id,
          level: spell.level,
          materialComponents: spell.material_components,
          name: spell.name,
          range: spell.range,
          ritual: spell.ritual,
          school: spell.school,
          somaticComponents: spell.somatic_components,
          target: spell.target,
          verbalComponents: spell.verbal_components
        }
      end
    end
  end
end
