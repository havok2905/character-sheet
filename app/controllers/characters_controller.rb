class CharactersController < ApplicationController
  def index
    @characters = Character.all
  end

  def show
    @character = Character.find(params[:id])
  end

  def new
    @character = Character.new
  end

  def create
    @character = Character.new(character_params)

    if @character.save
      redirect_to @character
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @character = Character.find(params[:id])
  end

  def update
    @character = Character.find(params[:id])
    
    if @character.update(character_params)
      redirect_to @character
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @character = Character.find(params[:id])
    @character.destroy
    redirect_to characters_path
  end

  helper_method :get_profcient_class
  def get_profcient_class prof
    prof == 'prof' || prof == 'exp' ? 'character-sheet-table-data-bolded' : nil
  end

  helper_method :get_spells_by_level
  def get_spells_by_level level
    @character.character_spells.select { |spell|  spell.level == level }
  end

  private

  def character_params
    params.require(:character).permit!
  end
end