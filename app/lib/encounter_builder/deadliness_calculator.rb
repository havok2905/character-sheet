# frozen_string_literal: true

module EncounterBuilder
  class DeadlinessCalculator
    def run(party, hostile_party)
      party_members_xp_thresholds = calculate_party_members_xp_thresholds party
      hostiles_xp = calculate_hostiles_xp hostile_party
      return CoreRules::EncounterTypes::EASY if hostiles_xp <= party_members_xp_thresholds[0]
      return CoreRules::EncounterTypes::MEDIUM if hostiles_xp <= party_members_xp_thresholds[1]
      return CoreRules::EncounterTypes::HARD if hostiles_xp <= party_members_xp_thresholds[2]
      return CoreRules::EncounterTypes::VERY_HARD if hostiles_xp <= party_members_xp_thresholds[3]

      CoreRules::EncounterTypes::DEADLY
    end

    private

    def calculate_party_members_xp_thresholds(party)
      party_threshold = [0, 0, 0, 0]

      party.each do |party_member|
        threshold = calculate_party_member_xp_thresholds party_member
        4.times do |i|
          index = i - 1
          party_threshold[index] = party_threshold[index] + threshold[index]
        end
      end

      party_threshold
    end

    def calculate_party_member_xp_thresholds(party_member)
      level = party_member.total_level
      CoreRules::XpThresholdsByLevelTable::XP_THRESHOLDS_BY_LEVEL_TABLE[level]
    end

    def calculate_hostiles_xp(hostile_party)
      return 0 if hostile_party.count.zero?

      hostile_party_xp = hostile_party.reduce(0) { |total, hostile| total + hostile.total_xp }
      hostile_party_xp * calculate_monster_multiplier(hostile_party)
    end

    def calculate_monster_multiplier(hostile_party)
      return 0 if hostile_party.empty?

      num_monsters = hostile_party.count
      return 1 if num_monsters == 1
      return 1.5 if num_monsters == 2
      return 2 if num_monsters >= 3 && num_monsters <= 6
      return 2.5 if num_monsters >= 7 && num_monsters <= 10
      return 3 if num_monsters >= 11 && num_monsters <= 14

      4
    end
  end
end
