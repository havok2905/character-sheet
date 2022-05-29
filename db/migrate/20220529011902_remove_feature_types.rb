class RemoveFeatureTypes < ActiveRecord::Migration[7.0]
  def change
    remove_column :character_features, :feature_type
    remove_column :creature_features, :feature_type
  end
end
