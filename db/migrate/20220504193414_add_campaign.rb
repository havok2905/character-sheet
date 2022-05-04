class AddCampaign < ActiveRecord::Migration[7.0]
  def change
    create_table :campaigns do |t|
      t.text :description
      t.string :name
      t.timestamps
    end
  end
end
