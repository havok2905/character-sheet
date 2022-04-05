module Resolvers
  class FetchCharacters < GraphQL::Schema::Resolver
    type [Types::CharacterType], null: false
    
    def resolve
      Character.all
    end
  end
end