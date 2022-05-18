# frozen_string_literal: true

class FactionsController < ApplicationController
  before_action :authenticate_user!, only: %i[
    create
    destroy
    edit
    new
    update
  ]

  def index
    @factions = factions
  end

  def show
    @faction = faction_by_id
  end

  def new
    @faction = new_faction
  end

  def create
    @faction = new_faction_with_params

    if @faction.save
      redirect_to factions_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @faction = faction_by_id
  end

  def update
    @faction = faction_by_id

    if @faction.update faction_params
      redirect_to faction_path @faction
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @faction = faction_by_id
    @faction.destroy
    redirect_to factions_path
  end

  helper_method :get_factions_by_level
  def get_factions_by_level(level)
    @faction.factions.select { |faction| faction.level == level }
  end

  helper_method :modify_faction
  def modify_faction
    user_signed_in?
  end

  private

  def faction_by_id
    Faction.find params[:id]
  end

  def faction_params
    params.require(:faction).permit!
  end

  def factions
    Faction.order :name
  end

  def new_faction
    Faction.new
  end

  def new_faction_with_params
    Faction.new faction_params
  end
end
