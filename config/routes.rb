Rails.application.routes.draw do
  get "/", to: "home#index"
  
  resources :characters
  get "/characters/:id/edit_attacks", to: 'characters#edit_attacks', as: 'character_edit_attacks'
  get "/characters/:id/edit_features", to: 'characters#edit_features', as: 'character_edit_features'
  get "/characters/:id/edit_inventory", to: 'characters#edit_inventory', as: 'character_edit_inventory'
  get "/characters/:id/edit_resources", to: 'characters#edit_resources', as: 'character_edit_resources'
  get "/characters/:id/edit_spells", to: 'characters#edit_spells', as: 'character_edit_spells'
  
  resources :monsters

  resources :npcs
  
  root "home#index"
end
