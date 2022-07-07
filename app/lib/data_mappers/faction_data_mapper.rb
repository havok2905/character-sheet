module DataMappers
  class FactionDataMapper < DataMappers::BaseDataMapper
    def run faction
      image_url = get_image_url faction, :image

      {
        alignment: faction.alignment,
        allies: faction.allies,
        characters: characters_response(faction),
        creatures: creatures_response(faction),
        description: faction.description,
        goals: faction.goals,
        id: faction.id,
        ideals: faction.ideals,
        imageUrl: image_url,
        name: faction.name,
        rivals: faction.rivals
      }
    end
  
    private

    def characters_response faction
      characters = faction.characters || []

      characters.map do |character|
        image_url = get_image_url character, :image

        {
          id: character.id,
          imageUrl: image_url,
          name: character.name
        }
      end
    end

    def creatures_response faction
      creatures = faction.creatures || []

      creatures.map do |creature|
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
          creatureCategory: creature.creature_category,
          creatureType: creature.creature_type,
          damageImmunities: creature.damage_immunities,
          damageResistances: creature.damage_resistances,
          damageVulnerabilities: creature.damage_vulnerabilities,
          description: creature.description,
          dexterityMod: creature.dexterity_mod,
          dexteritySave: creature.dexterity_save,
          dexterityScore: creature.dexterity_score,
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
          name: creature.name,
          personalityTraits: creature.personality_traits,
          regionalEffectsText: creature.regional_effects_text,
          senses: creature.senses,
          size: creature.size,
          skills: creature.skills,
          speed: creature.speed,
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
    end
  end
end
