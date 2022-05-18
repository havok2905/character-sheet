# frozen_string_literal: true

module UiCharacterable
  include ActiveSupport::Concern

  def character_class_row(character)
    subclass = character.character_sub_class.present? ? ", #{character.character_sub_class}" : nil
    "#{character.character_class}#{subclass} (#{character.character_class_level})"
  end

  def character_multiclass_row(character)
    return nil unless character.multiclass_class.present?
    subclass = character.multiclass_sub_class.present? ? ", #{character.multiclass_sub_class}" : nil
    "#{character.multiclass_class}#{subclass} (#{character.multiclass_class_level})"
  end
end
