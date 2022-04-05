module Resolvers
  module Queries
    class FetchCharacters < BaseQuery
      type [Types::CharacterType], null: false
      
      def resolve
        Character.all
      end
    end
  end
end