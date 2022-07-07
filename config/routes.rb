Rails.application.routes.draw do

  if Rails.env.production?
    default_url_options :host => 'localhost:3000'
  else
    default_url_options :host => 'localhost:3000'
  end

  devise_for :users, :skip => [:registrations]

  get '/', to: 'home#index'

  get '/characters/:id/edit_attacks', to: 'characters#edit_attacks', as: 'character_edit_attacks'
  get '/characters/:id/edit_creatures', to: 'characters#edit_creatures', as: 'character_edit_creatures'
  get '/characters/:id/edit_factions', to: 'characters#edit_factions', as: 'character_edit_factions'
  get '/characters/:id/edit_features', to: 'characters#edit_features', as: 'character_edit_features'
  get '/characters/:id/edit_inventory', to: 'characters#edit_inventory', as: 'character_edit_inventory'
  get '/characters/:id/edit_magic_items', to: 'characters#edit_magic_items', as: 'character_edit_magic_items'
  get '/characters/:id/edit_resources', to: 'characters#edit_resources', as: 'character_edit_resources'
  get '/characters/:id/edit_spells', to: 'characters#edit_spells', as: 'character_edit_spells'
  resources :characters

  get '/creatures/:id/edit_actions', to: 'creatures#edit_actions', as: 'creature_edit_actions'
  get '/creatures/:id/edit_features', to: 'creatures#edit_features', as: 'creature_edit_features'
  get '/creatures/:id/edit_lair_actions', to: 'creatures#edit_lair_actions', as: 'creature_edit_lair_actions'
  get '/creatures/:id/edit_legendary_actions', to: 'creatures#edit_legendary_actions', as: 'creature_edit_legendary_actions'
  resources :creatures
  post '/creatures/:id/upload_image', to: 'creatures#upload_image', as: 'creature_upload_image'

  resources :factions
  post '/factions/:id/upload_image', to: 'factions#upload_image', as: 'faction_upload_image'

  resources :locations
  post '/locations/:id/upload_sigil', to: 'locations#upload_sigil', as: 'location_upload_sigil'
  post '/locations/:id/upload_map', to: 'locations#upload_map', as: 'location_upload_map'

  resources :magic_items
  post '/magic_items/:id/upload_image', to: 'magic_items#upload_image', as: 'magic_item_upload_image'

  resources :pins, only: [:create, :destroy, :update]
  
  resources :spells

  resources :users, only: [:create, :destroy, :edit, :index]
  patch '/users/:id/update_email', to: 'users#update_email', as: 'user_update_email'
  patch '/users/:id/update_role', to: 'users#update_role', as: 'user_update_role'
  patch '/users/:id/update_password', to: 'users#update_password', as: 'user_update_password'
  patch '/users/:id/update_username', to: 'users#update_username', as: 'user_update_username'

  root 'home#index'
end
