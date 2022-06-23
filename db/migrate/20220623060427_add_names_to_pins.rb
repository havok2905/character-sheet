class AddNamesToPins < ActiveRecord::Migration[7.0]
  def change
    add_column :pins, :name, :string
  end
end
