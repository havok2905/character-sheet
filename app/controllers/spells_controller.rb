# frozen_string_literal: true

class SpellsController < ApplicationController
  def index
    s = Spell.all
    spells = spells_response_model s
    respond_to do |format|
      format.html
      format.json { render json: { spells: } }
    end
  end

  def show
    s = Spell.find params[:id]
    spell = spell_response_model s
    respond_to do |format|
      format.html
      format.json { render json: { spell: } }
    end
  end

  def new; end

  def create
    s = Spell.create create_spell_params
    spell = spell_response_model s
    render json: { spell: }
  end

  def edit; end

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
    mapper = DataMappers::SpellDataMapper.new
    mapper.run spell
  end

  def spells_response_model(spells)
    spells.map do |spell|
      spell_response_model spell
    end
  end

  def create_spell_params
    create_spell_request.deep_transform_keys!(&:underscore)
  end

  def create_spell_request
    params.require(:spell).permit(
      :castingTime,
      :components,
      :concentration,
      :description,
      :descriptionHigherLevels,
      :duration,
      :level,
      :materialComponents,
      :name,
      :range,
      :ritual,
      :school,
      :somaticComponents,
      :target,
      :verbalComponents
    )
  end

  def update_spell_params
    update_spell_request.deep_transform_keys!(&:underscore)
  end

  def update_spell_request
    params.require(:spell).permit(
      :castingTime,
      :components,
      :concentration,
      :description,
      :descriptionHigherLevels,
      :duration,
      :level,
      :materialComponents,
      :name,
      :range,
      :ritual,
      :school,
      :somaticComponents,
      :target,
      :verbalComponents
    )
  end
end
