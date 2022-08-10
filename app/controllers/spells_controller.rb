# frozen_string_literal: true

class SpellsController < ApiController
  def index
    s = Spell.order :level, :name
    spells = spells_response_model s
    render json: { spells: }
  end

  def show
    s = Spell.find params[:id]
    spell = spell_response_model s
    render json: { spell: }
  end

  def create
    s = Spell.create create_spell_params
    spell = spell_response_model s
    render json: { spell: }
  end

  def update
    s = Spell.find params[:id]
    s.update update_spell_params
    spell = spell_response_model s
    render json: { spell: }
  end

  def destroy
    s = Spell.find params[:id]
    s.destroy
    render json: {}
  end

  private

  def spell_response_model(spell)
    mapper = DataMappers::Responses::SpellDataMapper.new
    mapper.run spell
  end

  def spells_response_model(spells)
    spells.map do |spell|
      spell_response_model spell
    end
  end

  def spell_request
    %i[
      castingTime
      components
      concentration
      description
      descriptionHigherLevels
      duration
      level
      materialComponents
      name
      range
      ritual
      school
      somaticComponents
      target
      verbalComponents
    ]
  end

  def create_spell_params
    create_spell_request.deep_transform_keys!(&:underscore)
  end

  def create_spell_request
    params.require(:spell).permit(*spell_request)
  end

  def update_spell_params
    update_spell_request.deep_transform_keys!(&:underscore)
  end

  def update_spell_request
    params.require(:spell).permit(*spell_request)
  end
end
