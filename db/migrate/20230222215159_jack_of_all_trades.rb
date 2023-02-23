class JackOfAllTrades < ActiveRecord::Migration[7.0]
  def change
    add_column :characters, :jack_of_all_trades, :boolean
    add_column :creatures, :jack_of_all_trades, :boolean
  end
end
