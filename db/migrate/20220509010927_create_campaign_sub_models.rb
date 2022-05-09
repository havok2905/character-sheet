class CreateCampaignSubModels < ActiveRecord::Migration[7.0]
  def change
    create_table :campaign_arcs do |t|
      t.belongs_to :campaign, index: true, foreign_key: true
      t.text :description
      t.string :name

      t.timestamps
    end

    create_table :campaign_arc_sessions do |t|
      t.belongs_to :campaign_arc, index: true, foreign_key: true
      t.text :description
      t.string :name

      t.timestamps
    end

    add_reference :encounters, :campaign_arc_session, index: true
  end
end
