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
    @spells = spells.order 'level ASC, name'
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

  def spell_params
    params.require(:spell).permit!
  end

  def spells
    Spell.all
  end

  def new_spell
    Spell.new
  end

  def new_spell_with_params
    Spell.new spell_params
  end
end
