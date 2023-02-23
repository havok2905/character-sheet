class RemoveSkills < ActiveRecord::Migration[7.0]
  def change
    remove_column :creatures, :skills
  end
end
