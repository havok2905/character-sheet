# frozen_string_literal: true

require 'rails_helper'

describe Creature, type: :model do
  describe '#total_level' do
    subject { described_class.new }

    it 'should handle nil' do
      subject.cr = nil
      expect(subject.total_level).to eq 0
    end

    it 'should handle 0' do
      subject.cr = 0
      expect(subject.total_level).to eq 0
    end

    it 'should handle negligable CRs' do
      subject.cr = 0.125
      expect(subject.total_level).to eq 0
    end

    it 'should handle conversion to level 1' do
      subject.cr = 0.25
      expect(subject.total_level).to eq 1
    end

    it 'should handle conversion to level 2' do
      subject.cr = 0.5
      expect(subject.total_level).to eq 2
    end

    it 'should handle conversion to level 3' do
      subject.cr = 1
      expect(subject.total_level).to eq 3
    end

    it 'should handle intermediate levels' do
      subject.cr = 4
      expect(subject.total_level).to eq 8
    end

    it 'should handle level 20' do
      subject.cr = 10
      expect(subject.total_level).to eq 20
    end

    it 'should handle too hight levels' do
      subject.cr = 11
      expect(subject.total_level).to eq 20
    end
  end
end
