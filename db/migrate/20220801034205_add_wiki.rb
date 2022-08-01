class AddWiki < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.text :content
      t.string :title
      t.timestamps
    end

    create_table :tags do |t|
      t.string :title
      t.timestamps
    end

    create_join_table :articles, :tags do |t|
      t.index :article_id
      t.index :tag_id
    end
  end
end
