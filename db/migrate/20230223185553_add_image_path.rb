class AddImagePath < ActiveRecord::Migration[7.0]
  def change
    add_column :characters, :image_path, :string
    add_column :creatures, :image_path, :string
    add_column :magic_items, :image_path, :string
  end
end
