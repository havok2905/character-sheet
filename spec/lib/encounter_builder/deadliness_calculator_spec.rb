# frozen_string_literal: true

require 'rails_helper'

describe EncounterBuilder::DeadlinessCalculator do
  describe '#run' do
    subject { described_class.new }

    it 'should run for an easy encounter' do
      party = [
        Character.new({ character_class_level: 3 }),
        Character.new({ character_class_level: 3 }),
        Character.new({ character_class_level: 2, multiclass_class_level: 1 }),
        Creature.new({ cr: 0 }),
        Creature.new({ cr: 2 })
      ]

      hostile_party = [
        Creature.new({ cr: 0.125 }),
        Creature.new({ cr: 0.125 }),
        Creature.new({ cr: 0.25 }),
        Creature.new({ cr: 0.25 })
      ]

      result = subject.run party, hostile_party

      expect(result).to eq 'Easy'
    end

    it 'should run for a medium encounter' do
      party = [
        Character.new({ character_class_level: 3 }),
        Character.new({ character_class_level: 3 }),
        Character.new({ character_class_level: 2, multiclass_class_level: 1 }),
        Creature.new({ cr: 0 }),
        Creature.new({ cr: 2 })
      ]

      hostile_party = [
        Creature.new({ cr: 1 }),
        Creature.new({ cr: 0.25 }),
        Creature.new({ cr: 0.25 }),
        Creature.new({ cr: 0.25 })
      ]

      result = subject.run party, hostile_party

      expect(result).to eq 'Medium'
    end

    it 'should run for a hard encounter' do
      party = [
        Character.new({ character_class_level: 3 }),
        Character.new({ character_class_level: 3 }),
        Character.new({ character_class_level: 2, multiclass_class_level: 1 }),
        Creature.new({ cr: 0 }),
        Creature.new({ cr: 2 })
      ]

      hostile_party = [
        Creature.new({ cr: 1 }),
        Creature.new({ cr: 1 }),
        Creature.new({ cr: 1 }),
        Creature.new({ cr: 0.25 })
      ]

      result = subject.run party, hostile_party

      expect(result).to eq 'Very Hard'
    end

    it 'should run for a deadly encounter' do
      party = [
        Character.new({ character_class_level: 3 }),
        Character.new({ character_class_level: 3 }),
        Character.new({ character_class_level: 2, multiclass_class_level: 1 }),
        Creature.new({ cr: 0 }),
        Creature.new({ cr: 2 })
      ]

      hostile_party = [
        Creature.new({ cr: 2 }),
        Creature.new({ cr: 1 }),
        Creature.new({ cr: 1 }),
        Creature.new({ cr: 0.25 })
      ]

      result = subject.run party, hostile_party

      expect(result).to eq 'Deadly'
    end

    it 'should run for a medium boss encounter' do
      party = [
        Character.new({ character_class_level: 3 }),
        Character.new({ character_class_level: 3 }),
        Character.new({ character_class_level: 2, multiclass_class_level: 1 }),
        Creature.new({ cr: 0 }),
        Creature.new({ cr: 2 })
      ]

      hostile_party = [
        Creature.new({ cr: 3 })
      ]

      result = subject.run party, hostile_party

      expect(result).to eq 'Medium'
    end

    it 'should run for a deadly boss encounter' do
      party = [
        Character.new({ character_class_level: 3 }),
        Character.new({ character_class_level: 3 }),
        Character.new({ character_class_level: 2, multiclass_class_level: 1 }),
        Creature.new({ cr: 0 }),
        Creature.new({ cr: 2 })
      ]

      hostile_party = [
        Creature.new({ cr: 30 })
      ]

      result = subject.run party, hostile_party

      expect(result).to eq 'Deadly'
    end
  end
end
