# frozen_string_literal: true

class CharactersController < ApplicationController
  def index
    c = Character.all
    characters = characters_response_model c
    respond_to do |format|
      format.html
      format.json { render json: { characters: } }
    end
  end

  def show
    c = Character.find params[:id]
    character = character_response_model c
    respond_to do |format|
      format.html
      format.json { render json: { character: } }
    end
  end

  def new; end

  def create
    c = Character.create create_character_params
    character = character_response_model c
    render json: { character: }
  end

  def edit; end

  def update
    c = Character.find params[:id]
    c.update update_character_params
    character = character_response_model c
    render json: { character: }
  end

  def upload_image
    c = Character.find params[:id]
    c.image = params['character-image-file-upload']
    c.save!
    character = character_response_model c
    render json: { character: }
  end

  def destroy
    c = Character.find params[:id]
    c.destroy
    render json: {}
  end

  private

  def create_character_params
    create_character_request.deep_transform_keys!(&:underscore)
  end

  def create_character_request
    params.require(:character).permit(
      :ac,
      :acrobaticsMod,
      :acrobaticsProf,
      :age,
      :alignment,
      :animalHandlingMod,
      :animalHandlingProf,
      :arcanaMod,
      :arcanaProf,
      :athleticsMod,
      :athleticsProf,
      :armorProficiencies,
      :background,
      :backstory,
      :bonds,
      :characterClass,
      :characterClassHitDice,
      :characterClassLevel,
      :characterSubClass,
      :charismaMod,
      :charismaProf,
      :charismaSave,
      :charismaScore,
      :conditionImmunities,
      :conditionResistances,
      :conditionVulnerabilities,
      :constitutionMod,
      :constitutionProf,
      :constitutionSave,
      :constitutionScore,
      :copperPieces,
      :damageImmunities,
      :damageResistances,
      :damageVulnerabilities,
      :deceptionMod,
      :deceptionProf,
      :dexterityMod,
      :dexterityProf,
      :dexteritySave,
      :dexterityScore,
      :electrumPieces,
      :eyes,
      :flaws,
      :goldPieces,
      :hair,
      :height,
      :historyMod,
      :historyProf,
      :hp,
      :ideals,
      :initiative,
      :insightMod,
      :insightProf,
      :intelligenceMod,
      :intelligenceProf,
      :intelligenceSave,
      :intelligenceScore,
      :intimidationMod,
      :intimidationProf,
      :investigationMod,
      :investigationProf,
      :languages,
      :medicineMod,
      :medicineProf,
      :multiclassClass,
      :multiclassClassHitDice,
      :multiclassClassLevel,
      :multiclassSubClass,
      :name,
      :natureMod,
      :natureProf,
      :passivePerception,
      :perceptionMod,
      :perceptionProf,
      :performanceMod,
      :performanceProf,
      :personalityTraits,
      :persuasionMod,
      :persuasionProf,
      :platinumPieces,
      :proficiencyBonus,
      :race,
      :religionMod,
      :religionProf,
      :senses,
      :silverPieces,
      :skin,
      :sleightOfHandMod,
      :sleightOfHandProf,
      :speed,
      :spellSlotsFirst,
      :spellSlotsSecond,
      :spellSlotsThird,
      :spellSlotsFourth,
      :spellSlotsFifth,
      :spellSlotsSixth,
      :spellSlotsSeventh,
      :spellSlotsEighth,
      :spellSlotsNinth,
      :spellcastingAbility,
      :spellcastingModifier,
      :spellcastingSaveDc,
      :stealthMod,
      :stealthProf,
      :strengthMod,
      :strengthProf,
      :strengthSave,
      :strengthScore,
      :subRace,
      :survivalMod,
      :survivalProf,
      :toolProficiencies,
      :weaponProficiencies,
      :weight,
      :wisdomMod,
      :wisdomProf,
      :wisdomSave,
      :wisdomScore
    )
  end

  def update_character_params
    character_params = update_character_request.deep_transform_keys!(&:underscore)

    character_params[:character_attacks].each do |attack|
      attack.deep_transform_keys!(&:underscore)
    end

    character_params[:character_attacks_attributes] = character_params[:character_attacks]
    character_params[:character_features_attributes] = character_params[:character_features]
    character_params[:character_feature_resources_attributes] = character_params[:character_feature_resources]
    character_params[:character_items_attributes] = character_params[:character_items]

    character_params.delete :character_attacks
    character_params.delete :character_features
    character_params.delete :character_feature_resources
    character_params.delete :character_items

    character_params
  end

  def update_character_request
    params.require(:character).permit(
      :ac,
      :acrobaticsMod,
      :acrobaticsProf,
      :age,
      :alignment,
      :animalHandlingMod,
      :animalHandlingProf,
      :arcanaMod,
      :arcanaProf,
      :athleticsMod,
      :athleticsProf,
      :armorProficiencies,
      :background,
      :backstory,
      :bonds,
      :characterClass,
      :characterClassHitDice,
      :characterClassLevel,
      :characterSubClass,
      :charismaMod,
      :charismaProf,
      :charismaSave,
      :charismaScore,
      :conditionImmunities,
      :conditionResistances,
      :conditionVulnerabilities,
      :constitutionMod,
      :constitutionProf,
      :constitutionSave,
      :constitutionScore,
      :copperPieces,
      :damageImmunities,
      :damageResistances,
      :damageVulnerabilities,
      :deceptionMod,
      :deceptionProf,
      :dexterityMod,
      :dexterityProf,
      :dexteritySave,
      :dexterityScore,
      :electrumPieces,
      :eyes,
      :flaws,
      :goldPieces,
      :hair,
      :height,
      :historyMod,
      :historyProf,
      :hp,
      :ideals,
      :initiative,
      :insightMod,
      :insightProf,
      :intelligenceMod,
      :intelligenceProf,
      :intelligenceSave,
      :intelligenceScore,
      :intimidationMod,
      :intimidationProf,
      :investigationMod,
      :investigationProf,
      :languages,
      :medicineMod,
      :medicineProf,
      :multiclassClass,
      :multiclassClassHitDice,
      :multiclassClassLevel,
      :multiclassSubClass,
      :name,
      :natureMod,
      :natureProf,
      :passivePerception,
      :perceptionMod,
      :perceptionProf,
      :performanceMod,
      :performanceProf,
      :personalityTraits,
      :persuasionMod,
      :persuasionProf,
      :platinumPieces,
      :proficiencyBonus,
      :race,
      :religionMod,
      :religionProf,
      :senses,
      :silverPieces,
      :skin,
      :sleightOfHandMod,
      :sleightOfHandProf,
      :speed,
      :spellSlotsFirst,
      :spellSlotsSecond,
      :spellSlotsThird,
      :spellSlotsFourth,
      :spellSlotsFifth,
      :spellSlotsSixth,
      :spellSlotsSeventh,
      :spellSlotsEighth,
      :spellSlotsNinth,
      :spellcastingAbility,
      :spellcastingModifier,
      :spellcastingSaveDc,
      :stealthMod,
      :stealthProf,
      :strengthMod,
      :strengthProf,
      :strengthSave,
      :strengthScore,
      :subRace,
      :survivalMod,
      :survivalProf,
      :toolProficiencies,
      :weaponProficiencies,
      :weight,
      :wisdomMod,
      :wisdomProf,
      :wisdomSave,
      :wisdomScore,
      :_destroy,
      characterAttacks: %i[_destroy attackBonus critRange damageDiceRoll damageTwoDiceRoll damageTwoType
                           damageType description id isSavingThrow name range savingThrowDescription savingThrowThreshold savingThrowType],
      characterFeatures: %i[_destroy name id source description],
      characterFeatureResources: %i[_destroy name id total],
      characterItems: %i[_destroy name id total],
      creatureIds: [],
      factionIds: [],
      magicItemIds: [],
      spellIds: []
    )
  end

  def character_response_model(character)
    mapper = DataMappers::CharacterDataMapper.new
    mapper.run character
  end

  def characters_response_model(characters)
    characters.map do |character|
      character_response_model character
    end
  end
end
