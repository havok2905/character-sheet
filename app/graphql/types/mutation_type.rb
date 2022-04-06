module Types
  class MutationType < Types::BaseObject
    field :create_character, mutation: Resolvers::Mutations::CreateCharacterMutation
    field :destroy_character, mutation: Resolvers::Mutations::DestroyCharacterMutation
    field :update_character, mutation: Resolvers::Mutations::UpdateCharacterMutation
  end
end
