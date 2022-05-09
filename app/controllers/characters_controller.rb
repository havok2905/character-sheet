# frozen_string_literal: true

class CharactersController < ApplicationController
  before_action :authenticate_user!, only: %i[
    create
    destroy
    edit
    edit_attacks
    edit_creatures
    edit_features
    edit_inventory
    edit_resources
    edit_spells
    new
    update
  ]

  def index
    @characters = characters
  end

  def show
    @character = character_by_id
  end

  def new
    @character = new_character
  end

  def create
    @character = new_character_with_params

    if @character.save
      redirect_to @character
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @character = character_by_id
  end

  def edit_attacks
    @character = character_by_id
  end

  def edit_creatures
    @character = character_by_id
    @creatures = creatures
  end

  def edit_features
    @character = character_by_id
  end

  def edit_inventory
    @character = character_by_id
  end

  def edit_resources
    @character = character_by_id
  end

  def edit_spells
    @character = character_by_id
    @spells = spells
  end

  def update
    @character = character_by_id

    if @character.update character_params
      redirect_to @character
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @character = character_by_id
    @character.destroy
    redirect_to characters_path
  end

  helper_method :get_profcient_class
  def get_profcient_class(prof)
    %w[prof exp].include?(prof) ? 'sheet-table-data-bolded' : nil
  end

  helper_method :get_spells_by_level
  def get_spells_by_level(level)
    @character.spells.select { |spell| spell.level == level }
  end

  helper_method :modify_character
  def modify_character
    user_signed_in?
  end

  private

  def characters
    Character.all
  end

  def character_by_id
    Character.find params[:id]
  end

  def character_params
    params.require(:character).permit!
  end

  def creatures
    Creature.all
  end

  def new_character
    Character.new
  end

  def new_character_with_params
    Character.new character_params
  end

  def spells
    Spell.all
  end
end
