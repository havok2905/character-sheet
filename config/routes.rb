Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  get "/", to: "home#index"
  resources :characters
  post "/graphql", to: "graphql#execute"
  root "home#index"
end
