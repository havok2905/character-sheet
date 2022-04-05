class CreateCharacterAttacks < ActiveRecord::Migration[7.0]
  def change
    create_table :character_attacks do |t|
      t.belongs_to :character, index: true, foreign_key: true
      t.integer :attack_bonus
      t.integer :crit_range
      t.string :damage_dice_roll
      t.string :damage_two_dice_roll
      t.string :damage_two_type
      t.string :damage_type
      t.text :description
      t.boolean :is_saving_throw
      t.string :name
      t.string :range
      t.text :saving_throw_description
      t.integer :saving_throw_threshold
      t.string :saving_throw_type
      t.timestamps
    end
  end
end
