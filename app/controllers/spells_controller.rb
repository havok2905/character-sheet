# frozen_string_literal: true

class SpellsController < ApplicationController
  def index
    s = Spell.all
    spells = spells_response_model s
    respond_to do |format|
      format.html
      format.json { render json: { spells: spells } }
    end
  end

  def show
    s = Spell.find params[:id]
    spell = spell_response_model s
    respond_to do |format|
      format.html
      format.json { render json: { spell: spell } }
    end
  end

  def new
  end

  def create
    s = Spell.create create_spell_params
    spell = spell_response_model s
    render json: { spell: spell }
  end

  def edit
  end

  def update
    s = Spell.find params[:id]
    s.update update_spell_params
    spell = spell_response_model s
    render json: { spell: spell }
  end

  def destroy
    s = Spell.find params[:id]
    s.destroy
    render json: {}
  end

  private

  def spell_response_model spell
    {
      castingTime: spell.casting_time,
      components: spell.components,
      concentration: spell.concentration,
      description: spell.description,
      descriptionHigherLevels: spell.description_higher_levels,
      duration: spell.duration,
      id: spell.id,
      level: spell.level,
      materialComponents: spell.material_components,
      name: spell.name,
      range: spell.range,
      ritual: spell.ritual,
      school: spell.school,
      somaticComponents: spell.somatic_components,
      target: spell.target,
      verbalComponents: spell.verbal_components
    }
  end

  def spells_response_model spells
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
