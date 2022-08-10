# frozen_string_literal: true

class FactionsController < ApiController
  def index
    f = Faction.order :name
    factions = factions_response_model f
    render json: { factions: }
  end

  def show
    f = Faction.find params[:id]
    faction = faction_response_model f
    render json: { faction: }
  end

  def create
    f = Faction.create create_faction_params
    faction = faction_response_model f
    render json: { faction: }
  end

  def update
    f = Faction.find params[:id]
    f.update update_faction_params
    faction = faction_response_model f
    render json: { faction: }
  end

  def upload_image
    f = Faction.find params[:id]
    f.image = params['faction-image-file-upload']
    f.save!
    faction = faction_response_model f
    render json: { faction: }
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

  def faction_response_model(faction)
    mapper = DataMappers::Responses::FactionDataMapper.new
    mapper.run faction
  end

  def factions_response_model(factions)
    factions.map do |faction|
      faction_response_model faction
    end
  end
end
