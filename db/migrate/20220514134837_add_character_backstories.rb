class AddCharacterBackstories < ActiveRecord::Migration[7.0]
  def change
    add_column :characters, :backstory, :text
    add_column :creatures, :backstory, :text
  end
end
