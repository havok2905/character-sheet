# frozen_string_literal: true

class SpellsController < ApplicationController
  before_action :authenticate_user!, only: %i[
    create
    destroy
    edit
    index
    new
    show
    update
  ]

  def index
    @spells = spells_search
  end

  def show
    @spell = spell_by_id
  end

  def new
    @spell = new_spell
  end

  def create
    @spell = new_spell_with_params

    if @spell.save
      redirect_to spells_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @spell = spell_by_id
  end

  def update
    @spell = spell_by_id

    if @spell.update spell_params
      redirect_to spell_path @spell
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @spell = spell_by_id
    @spell.destroy
    redirect_to spells_path
  end

  helper_method :get_spells_by_level
  def get_spells_by_level(level)
    @spell.spells.select { |spell| spell.level == level }
  end

  helper_method :modify_spell
  def modify_spell
    user_signed_in?
  end

  private

  def spell_by_id
    Spell.find params[:id]
  end

  # rubocop:disable Metrics/MethodLength
  def spell_params
    params.require(:spell).permit(
      :casting_time,
      :components,
      :concentration,
      :description,
      :description_higher_levels,
      :duration,
      :level,
      :material_components,
      :name,
      :range,
      :school,
      :somatic_components,
      :target,
      :verbal_components
    )
  end
  # rubocop:enable Metrics/MethodLength

  def spells
    Spell.order 'level ASC, name'
  end

  def spells_search
    level = params[:search_by_level]
    name = params[:search_by_name]
    school = params[:search_by_school]

    found_spells = spells
    found_spells = found_spells.where(level:) if level.present?
    found_spells = found_spells.where(school:) if school.present?
    found_spells = found_spells.where('name LIKE ?', "%#{name}%") if name.present?
    found_spells
  end

  def new_spell
    Spell.new
  end

  def new_spell_with_params
    Spell.new spell_params
  end
end
