# frozen_string_literal: true

module UiCreatureable
  include ActiveSupport::Concern

  def creature_row(creature)
    "#{creature.size}, #{creature.creature_type} (CR: #{creature.cr})"
  end
end
