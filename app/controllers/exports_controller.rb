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
    characters = Character.all
    creatures = Creature.all
    magic_items = MagicItem.all
    spells = Spell.all

    {
      characters:,
      creatures:,
      magic_items:,
      spells:
    }
  end

  def export_response(options)
    mapper = DataMappers::Responses::ExportDataMapper.new
    mapper.run options
  end
end
