class AddCharacterInventoryAndAlignmentColumns < ActiveRecord::Migration[7.0]
  def change
    add_column :characters, :alignment, :string
    add_column :characters, :copper_pieces, :integer
    add_column :characters, :electrum_pieces, :integer
    add_column :characters, :gold_pieces, :integer
    add_column :characters, :platinum_pieces, :integer
    add_column :characters, :silver_pieces, :integer
  end
end
