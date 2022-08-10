# frozen_string_literal: true

class ExportsController < ApiController
  def json
    response = export_response(required_data)
    render json: response
  end

  def json_download
    response = export_response(required_data)
    send_data response.to_json, type: :json, filename: 'export.json', disposition: 'attachment'
  end

  private

  def required_data
    articles = Article.all
    characters = Character.all
    creatures = Creature.all
    factions = Faction.all
    locations = Location.all
    magic_items = MagicItem.all
    spells = Spell.all

    locations_hash = locations.map do |location|
      {
        location:,
        map: Map.where(location_id: location.id).first
      }
    end

    {
      articles:,
      characters:,
      creatures:,
      factions:,
      locations_hash:,
      magic_items:,
      spells:
    }
  end

  def export_response(options)
    mapper = DataMappers::Responses::ExportDataMapper.new
    mapper.run options
  end
end
