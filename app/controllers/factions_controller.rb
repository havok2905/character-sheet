# frozen_string_literal: true

class FactionsController < ApplicationController
  def index
    f = Faction.all
    factions = factions_response_model f
    respond_to do |format|
      format.html
      format.json { render json: { factions: factions } }
    end
  end

  def show
    f = Faction.find params[:id]
    cr = f.creatures
    ch = f.characters
    faction = faction_response_model f, cr, ch
    respond_to do |format|
      format.html
      format.json { render json: { faction: faction } }
    end
  end

  def new
  end

  def create
    f = Faction.create create_faction_params
    faction = faction_response_model f, [], []
    render json: { faction: faction }
  end

  def edit
  end

  def update
    f = Faction.find params[:id]
    f.update update_faction_params
    cr = f.creatures
    ch = f.characters
    faction = faction_response_model f, cr, ch
    render json: { faction: faction }
  end

  def upload_image
    f = Faction.find params[:id]
    f.image = params['faction-image-file-upload']
    f.save!
    cr = f.creatures
    ch = f.characters
    faction = faction_response_model f, cr, ch
    render json: { faction: faction }
  end

  def destroy
    f = Faction.find params[:id]
    f.destroy
    render json: {}
  end

  private

  def create_faction_params
    create_faction_request.deep_transform_keys!(&:underscore)
  end

  def create_faction_request
    params.require(:faction).permit(
      :alignment,
      :allies,
      :description,
      :goals,
      :ideals,
      :name,
      :rivals
    )
  end

  def update_faction_params
    update_faction_request.deep_transform_keys!(&:underscore)
  end

  def update_faction_request
    params.require(:faction).permit(
      :alignment,
      :allies,
      :description,
      :goals,
      :ideals,
      :name,
      :rivals
    )
  end

  def character_response_model character
    mapper = DataMappers::CharacterResponseModel.new
    mapper.model_to_camel_case_response character
  end
  
  def creature_response_model creature
    mapper = DataMappers::CreatureResponseModel.new
    mapper.model_to_camel_case_response creature
  end

  def faction_response_model faction, creatures, characters
    mapper = DataMappers::FactionResponseModel.new
    mapper.model_to_camel_case_response faction, creatures, characters
  end

  def factions_response_model factions
    factions.map do |faction|
      creatures = faction.creatures
      characters = faction.characters
      faction_response_model faction, creatures, characters
    end
  end
end
