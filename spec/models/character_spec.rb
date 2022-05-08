require 'rails_helper'

describe Character, type: :model do
  describe "#total_level" do
    subject { described_class.new }

    it "should add all class levels of a character" do
      subject.character_class_level = 2
      subject.multiclass_class_level = 1
      expect(subject.total_level).to eq 3
    end

    it "should handle nil levels" do
      subject.character_class_level = nil
      subject.multiclass_class_level = nil
      expect(subject.total_level).to eq 0
    end
  end
end
