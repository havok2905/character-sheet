class RemoveDescriptionFromInventory < ActiveRecord::Migration[7.0]
  def change
    remove_column :character_items, :description
  end
end
