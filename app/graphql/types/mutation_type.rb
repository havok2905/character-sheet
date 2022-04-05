module Types
  class MutationType < Types::BaseObject
    field :create_character_item, mutation: Resolvers::Mutations::CreateCharacterItemMutation
    field :destroy_character_item, mutation: Resolvers::Mutations::DestroyCharacterItemMutation
    field :update_character_item, mutation: Resolvers::Mutations::UpdateCharacterItemMutation
  end
end
