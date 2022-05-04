class CreaturesController < ApplicationController
  def index
    @creatures = creatures
  end

  def monsters
    @creatures = get_monsters
  end

  def npcs
    @creatures = get_npcs
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

  def edit_features
    @creature = creature_by_id
  end

  def edit_lair_actions
    @creature = creature_by_id
  end

  def edit_legendary_actions
    @creature = creature_by_id
  end

  def edit_regional_effects
    @creature = creature_by_id
  end

  def edit_spells
    @creature = creature_by_id
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
  def get_spells_by_level level
    @creature.creature_spells.select { |spell|  spell.level == level }
  end

  private

  def creature_by_id
    Creature.find params[:id]
  end

  def creature_params
    params.require(:creature).permit!
  end

  def creatures
    Creature.all
  end

  def get_monsters
    Creature.where creature_category: 'Monster'
  end

  def get_npcs
    Creature.where creature_category: 'NPC'
  end
  
  def new_creature
    Creature.new
  end

  def new_creature_with_params
    Creature.new creature_params
  end
end