class NpcsController < ApplicationController
  def index
    @npcs = creatures
  end

  def show
    @npc = creature_by_id
  end

  def new
    @npc = new_creature
  end

  def create
    @npc = new_creature_with_params
    @npc.creature_category = "NPC"

    if @npc.save
      redirect_to npcs_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @npc = creature_by_id
  end

  def update
    @npc = creature_by_id
    
    if @npc.update creature_params
      redirect_to npc_path @npc
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @npc = creature_by_id
    @npc.destroy
    redirect_to npcs_path
  end

  helper_method :get_spells_by_level
  def get_spells_by_level level
    @npc.creature_spells.select { |spell|  spell.level == level }
  end

  private

  def creature_by_id
    Creature.find params[:id]
  end

  def creature_params
    params.require(:creature).permit!
  end

  def creatures
    Creature.where creature_category: 'NPC'
  end
  
  def new_creature
    Creature.new
  end

  def new_creature_with_params
    Creature.new creature_params
  end
end