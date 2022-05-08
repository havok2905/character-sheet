# frozen_string_literal: true

module CoreRules
  class MonsterMultiplierTable
    MONSTER_MULTIPLIER_TABLE = [
      { min: 1, max: 1, value: 1 },
      { min: 2, max: 2, value: 1.5 },
      { min: 3, max: 6, value: 2 },
      { min: 7, max: 10, value: 2.5 },
      { min: 11, max: 14, value: 3 },
      { min: 15, max: nil, value: 4 }
    ].freeze
  end
end
