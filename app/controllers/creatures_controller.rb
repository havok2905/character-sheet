# frozen_string_literal: true

class CreaturesController < ApiController
  def index
    c = Creature.order :name
    creatures = creatures_response_model c
    render json: { creatures: }
  end

  def show
    c = Creature.find params[:id]
    creature = creature_response_model c
    render json: { creature: }
  end

  def create
    c = Creature.create create_creature_params
    creature = creature_response_model c
    render json: { creature: }
  end

  def update
    c = Creature.find params[:id]
    c.update update_creature_params
    creature = creature_response_model c
    render json: { creature: }
  end

  def upload_image
    c = Creature.find params[:id]
    c.image = params['creature-image-file-upload']
    c.save!
    creature = creature_response_model c
    render json: { creature: }
  end

  def destroy
    c = Creature.find params[:id]
    c.destroy
    render json: {}
  end

  private

  def create_creature_params
    create_creature_request.deep_transform_keys!(&:underscore)
  end

  def create_creature_request
    params.require(:creature).permit(
      :ac,
      :acrobaticsProf,
      :alignment,
      :animalHandlingProf,
      :arcanaProf,
      :armor,
      :athleticsProf,
      :backstory,
      :bonds,
      :charismaProf,
      :charismaScore,
      :conditionImmunities,
      :conditionResistances,
      :conditionVulnerabilities,
      :constitutionProf,
      :constitutionScore,
      :cr,
      :creatureCategory,
      :creatureType,
      :damageImmunities,
      :damageResistances,
      :damageVulnerabilities,
      :deceptionProf,
      :description,
      :dexterityProf,
      :dexterityScore,
      :flaws,
      :historyProf,
      :hp,
      :ideals,
      :insightProf,
      :intelligenceProf,
      :intelligenceScore,
      :intimidationProf,
      :investigationProf,
      :jackOfAllTrades,
      :languages,
      :medicineProf,
      :name,
      :natureProf,
      :perceptionProf,
      :performanceProf,
      :personalityTraits,
      :persuasionProf,
      :religionProf,
      :senses,
      :size,
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
      :spellcastingLevel,
      :stealthProf,
      :strengthProf,
      :strengthScore,
      :survivalProf,
      :wisdomProf,
      :wisdomScore
    )
  end

  def update_creature_params
    creature_params = update_creature_request.deep_transform_keys!(&:underscore)

    creature_params[:creature_actions].each do |action|
      action.deep_transform_keys!(&:underscore)
    end

    creature_params[:creature_actions_attributes] = creature_params[:creature_actions]
    creature_params[:creature_features_attributes] = creature_params[:creature_features]
    creature_params[:creature_lair_actions_attributes] = creature_params[:creature_lair_actions]
    creature_params[:creature_legendary_actions_attributes] = creature_params[:creature_legendary_actions]
    creature_params[:creature_regional_effects_attributes] = creature_params[:creature_regional_effects]

    creature_params.delete :creature_actions
    creature_params.delete :creature_features
    creature_params.delete :creature_lair_actions
    creature_params.delete :creature_legendary_actions
    creature_params.delete :creature_regional_effects

    creature_params
  end

  def update_creature_request
    params.require(:creature).permit(
      :ac,
      :acrobaticsProf,
      :alignment,
      :armor,
      :animalHandlingProf,
      :arcanaProf,
      :athleticsProf,
      :backstory,
      :bonds,
      :charismaProf,
      :charismaScore,
      :conditionImmunities,
      :conditionResistances,
      :conditionVulnerabilities,
      :constitutionProf,
      :constitutionScore,
      :cr,
      :creatureCategory,
      :creatureType,
      :damageImmunities,
      :damageResistances,
      :damageVulnerabilities,
      :deceptionProf,
      :description,
      :dexterityProf,
      :dexterityScore,
      :flaws,
      :historyProf,
      :hp,
      :ideals,
      :insightProf,
      :intelligenceProf,
      :intelligenceScore,
      :intimidationProf,
      :investigationProf,
      :jackOfAllTrades,
      :lairActionsText,
      :legendaryActionsText,
      :languages,
      :medicineProf,
      :name,
      :natureProf,
      :perceptionProf,
      :performanceProf,
      :personalityTraits,
      :persuasionProf,
      :regionalEffectsText,
      :religionProf,
      :senses,
      :size,
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
      :spellcastingLevel,
      :stealthProf,
      :strengthProf,
      :strengthScore,
      :survivalProf,
      :wisdomProf,
      :wisdomScore,
      :_destroy,
      creatureActions: %i[_destroy actionType actionCombatType attackBonus damageDiceRoll damageType
                          damageTwoDiceRoll damageTwoType description id name range savingThrowDc savingThrowType],
      creatureFeatures: %i[_destroy description id name],
      creatureLairActions: %i[_destroy description id],
      creatureLegendaryActions: %i[_destroy description id name],
      creatureRegionalEffects: %i[_destroy description id],
      magicItemIds: [],
      spellIds: []
    )
  end

  def creature_response_model(creature)
    mapper = DataMappers::Responses::CreatureDataMapper.new
    mapper.run creature
  end

  def creatures_response_model(creatures)
    creatures.map do |creature|
      creature_response_model creature
    end
  end
end
