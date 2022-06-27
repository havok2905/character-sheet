class CreatureCrFromFloatToString < ActiveRecord::Migration[7.0]
  def change
    change_column :creatures, :cr, :string
  end
end
