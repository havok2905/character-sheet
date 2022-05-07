class AddPetsToCharacters < ActiveRecord::Migration[7.0]
  def change
    create_join_table :characters, :creatures do |t|
      t.index :character_id
      t.index :creature_id
    end
  end
end
