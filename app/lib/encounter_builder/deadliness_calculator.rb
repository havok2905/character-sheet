# frozen_string_literal: true

module EncounterBuilder
  EASY      = 'Easy'
  MEDIUM    = 'Medium'
  HARD      = 'Hard'
  VERY_HARD = 'Very Hard'
  DEADLY    = 'Deadly'

  XP_THRESHOLDS_BY_LEVEL = [
    [0,    0,    0,    0], # Account for negligable creatures in calculations
    [25,   50,   75,   100], # lvl 1
    [50,   100,  150,  200], # lvl 2
    [75,   150,  225,  400], # lvl 3
    [125,  250,  375,  500], # lvl 4
    [250,  500,  750,  1100], # lvl 5
    [300,  600,  900,  1400], # lvl 6
    [350,  600,  1100, 1700], # lvl 7
    [450,  900,  1400, 2100], # lvl 8
    [550,  1100, 1600, 2400], # lvl 9
    [600,  1200, 1900, 2800], # lvl 10
    [800,  1600, 2400, 3600], # lvl 11
    [1000, 2000, 3000, 4500], # lvl 12
    [1100, 2200, 3400, 5100], # lvl 13
    [1250, 2500, 3800, 5700], # lvl 14
    [1400, 2800, 4300, 6400], # lvl 15
    [1600, 3200, 4800, 7200], # lvl 16
    [2000, 3900, 5900, 8800], # lvl 17
    [2100, 4200, 6300, 9500], # lvl 18
    [2400, 4900, 7300, 10_900], # lvl 19
    [2800, 5700, 8500, 12_700]  # lvl 20
  ].freeze

  class DeadlinessCalculator
    def run(party, hostile_party)
      party_members_xp_thresholds = calculate_party_members_xp_thresholds party
      hostiles_xp = calculate_hostiles_xp hostile_party
      return EASY if hostiles_xp <= party_members_xp_thresholds[0]
      return MEDIUM if hostiles_xp <= party_members_xp_thresholds[1]
      return HARD if hostiles_xp <= party_members_xp_thresholds[2]
      return VERY_HARD if hostiles_xp <= party_members_xp_thresholds[3]

      DEADLY
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
      XP_THRESHOLDS_BY_LEVEL[level]
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
