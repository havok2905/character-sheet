class MonstersController < ApplicationController
  def index
    @monsters = creatures
  end

  def show
    @monster = creature_by_id
  end

  def new
    @monster = new_creature
  end

  def create
    @monster = new_creature_with_params
    @monster.creature_category = "Monster"

    if @monster.save
      redirect_to monsters_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @monster = creature_by_id
  end

  def update
    @monster = creature_by_id
    
    if @monster.update creature_params
      redirect_to monster_path @monster
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @monster = creature_by_id
    @monster.destroy
    redirect_to monsters_path
  end

  helper_method :get_spells_by_level
  def get_spells_by_level level
    []
  end

  private

  def creature_by_id
    Creature.find params[:id]
  end

  def creature_params
    params.require(:creature).permit!
  end

  def creatures
    Creature.where creature_category: 'Monster'
  end
  
  def new_creature
    Creature.new
  end

  def new_creature_with_params
    Creature.new creature_params
  end
end