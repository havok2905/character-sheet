class EncountersController < ApplicationController
  before_action :authenticate_user!, :only => [
    :create,
    :destroy,
    :edit,
    :new,
    :update
  ]

  def index
    @encounters = encounters
  end

  def show
    @encounter = encounter_by_id
  end

  def new
    @encounter = new_encounter
  end

  def create
    @encounter = new_encounter_with_params

    if @encounter.save
      redirect_to encounters_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @encounter = encounter_by_id
  end

  def update
    @encounter = encounter_by_id
    
    if @encounter.update encounter_params
      redirect_to encounter_path @encounter
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @encounter = encounter_by_id
    @encounter.destroy
    redirect_to encounters_path
  end

  helper_method :modify_encounter
  def modify_encounter
    user_signed_in?
  end

  private

  def encounter_by_id
    Encounter.find params[:id]
  end

  def encounter_params
    params.require(:encounter).permit!
  end

  def encounters
    Encounter.all
  end
  
  def new_encounter
    Encounter.new
  end

  def new_encounter_with_params
    Encounter.new encounter_params
  end
end