# frozen_string_literal: true

class CreaturesController < ApplicationController
  include UiCreatureable
  include UiImagable

  helper_method :creature_row
  helper_method :image_alt_text
  helper_method :image_url

  before_action :authenticate_user!, only: %i[
    create
    destroy
    edit
    edit_actions
    edit_factions
    edit_features
    edit_lair_actions
    edit_legendary_actions
    edit_magic_items
    edit_regional_effects
    edit_spells
    new
    update
  ]

  def index
    @creatures = creatures_search
  end

  def show
    @creature = creature_by_id
  end

  def new
    @creature = new_creature
  end

  def create
    @creature = new_creature_with_params

    if @creature.save
      redirect_to creatures_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @creature = creature_by_id
  end

  def edit_actions
    @creature = creature_by_id
  end

  def edit_factions
    @creature = creature_by_id
    @factions = factions
  end

  def edit_features
    @creature = creature_by_id
  end

  def edit_lair_actions
    @creature = creature_by_id
  end

  def edit_legendary_actions
    @creature = creature_by_id
  end

  def edit_magic_items
    @creature = creature_by_id
    @magic_items = magic_items
  end

  def edit_regional_effects
    @creature = creature_by_id
  end

  def edit_spells
    @creature = creature_by_id
    @spells = spells
  end

  def update
    @creature = creature_by_id

    if @creature.update creature_params
      redirect_to creature_path @creature
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @creature = creature_by_id
    @creature.destroy
    redirect_to creatures_path
  end

  helper_method :get_spells_by_level
  def get_spells_by_level(level)
    @creature.spells.select { |spell| spell.level == level }
  end

  helper_method :modify_creature
  def modify_creature
    user_signed_in?
  end

  private

  def creature_by_id
    Creature.find params[:id]
  end

  def creature_params
    params.require(:creature).permit!
  end

  def creatures
    Creature.order :name
  end

  def creatures_search
    cr = params[:search_by_cr]
    creature_category = params[:search_by_category]
    name = params[:search_by_name]

    found_creatures = Creature.order(:name)
    found_creatures = found_creatures.where(cr:) if cr.present?
    found_creatures = found_creatures.where(creature_category:) if creature_category.present?
    found_creatures = found_creatures.where('name LIKE ?', "%#{name}%") if name.present?
    found_creatures
  end

  def factions
    Faction.order :name
  end

  def magic_items
    MagicItem.order :name
  end

  def new_creature
    Creature.new
  end

  def new_creature_with_params
    Creature.new creature_params
  end

  def spells
    Spell.order 'level ASC, name'
  end
end
