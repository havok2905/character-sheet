# frozen_string_literal: true

module Policies
  class ApplicationPolicy
    def initialize(user)
      @user = user
    end
  end
end
