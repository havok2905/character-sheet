module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    field :character, resolver: Resolvers::Queries::FetchCharacter
    field :characters, resolver: Resolvers::Queries::FetchCharacters

    field :character_item, resolver: Resolvers::Queries::FetchCharacterItem
    field :character_items_by_character_id, resolver: Resolvers::Queries::FetchCharacterItemsByCharacterId
  end
end
