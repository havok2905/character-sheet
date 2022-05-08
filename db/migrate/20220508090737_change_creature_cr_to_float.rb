class ChangeCreatureCrToFloat < ActiveRecord::Migration[7.0]
  def change
    change_column :creatures, :cr, :float
  end
end
