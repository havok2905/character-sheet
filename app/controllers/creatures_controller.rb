# frozen_string_literal: true

class CreaturesController < ApplicationController
  before_action :authenticate_user!, only: %i[
    edit_actions
    edit_features
    edit_lair_actions
    edit_legendary_actions
  ]

  def index
    c = Creature.all
    creatures = creatures_response_model c
    respond_to do |format|
      format.html
      format.json { render json: { creatures: creatures } }
    end
  end

  def show
    c = Creature.find params[:id]
    creature = creature_response_model c
    respond_to do |format|
      format.html
      format.json { render json: { creature: creature } }
    end
  end

  def new
  end

  def create
    c = Creature.create create_creature_params
    creature = creature_response_model c
    render json: { creature: creature }
  end

  def edit
  end

  def edit_actions
    @creature = Creature.find params[:id]
  end

  def edit_features
    @creature = Creature.find params[:id]
  end

  def edit_lair_actions
    @creature = Creature.find params[:id]
  end

  def edit_legendary_actions
    @creature = Creature.find params[:id]
  end

  def update
    c = Creature.find params[:id]
    c.update update_creature_params
    creature = creature_response_model c
    render json: { creature: creature }
  end

  def upload_image
    c = Creature.find params[:id]
    c.image = params['creature-image-file-upload']
    c.save!
    creature = creature_response_model c
    render json: { creature: creature }
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
      :alignment,
      :armor,
      :backstory,
      :bonds,
      :charismaMod,
      :charismaSave,
      :charismaScore,
      :conditionImmunities,
      :conditionResistances,
      :conditionVulnerabilities,
      :constitutionMod,
      :constitutionSave,
      :constitutionScore,
      :cr,
      :creatureCategory,
      :creatureType,
      :damageImmunities,
      :damageResistances,
      :damageVulnerabilities,
      :description,
      :dexterityMod,
      :dexteritySave,
      :dexterityScore,
      :flaws,
      :hp,
      :ideals,
      :intelligenceMod,
      :intelligenceSave,
      :intelligenceScore,
      :languages,
      :name,
      :personalityTraits,
      :senses,
      :size,
      :skills,
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
      :spellcastingModifier,
      :spellcastingSaveDc,
      :strengthMod,
      :strengthSave,
      :strengthScore,
      :wisdomMod,
      :wisdomSave,
      :wisdomScore
    )
  end

  def update_creature_params
    update_creature_request.deep_transform_keys!(&:underscore)
  end

  def update_creature_request
    params.require(:creature).permit(
      :ac,
      :alignment,
      :armor,
      :backstory,
      :bonds,
      :charismaMod,
      :charismaSave,
      :charismaScore,
      :conditionImmunities,
      :conditionResistances,
      :conditionVulnerabilities,
      :constitutionMod,
      :constitutionSave,
      :constitutionScore,
      :cr,
      :creatureCategory,
      :creatureType,
      :damageImmunities,
      :damageResistances,
      :damageVulnerabilities,
      :description,
      :dexterityMod,
      :dexteritySave,
      :dexterityScore,
      :flaws,
      :hp,
      :ideals,
      :intelligenceMod,
      :intelligenceSave,
      :intelligenceScore,
      :languages,
      :name,
      :personalityTraits,
      :senses,
      :size,
      :skills,
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
      :spellcastingModifier,
      :spellcastingSaveDc,
      :strengthMod,
      :strengthSave,
      :strengthScore,
      :wisdomMod,
      :wisdomSave,
      :wisdomScore,
      :_destroy,
      :factionIds => [],
      :magicItemIds => [],
      :spellIds => []
    )
  end

  def creature_response_model creature
    mapper = DataMappers::CreatureDataMapper.new
    mapper.run creature
  end

  def creatures_response_model creatures
    creatures.map do |creature|
      creature_response_model creature
    end
  end
end
