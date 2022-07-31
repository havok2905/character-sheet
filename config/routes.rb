Rails.application.routes.draw do

  if Rails.env.production?
    default_url_options :host => 'localhost:3000'
  else
    default_url_options :host => 'localhost:3000'
  end

  devise_for :users, :skip => [:registrations]

  get '/', to: 'home#index'

  resources :characters
  post '/characters/:id/upload_image', to: 'characters#upload_image', as: 'character_upload_image'

  resources :creatures
  post '/creatures/:id/upload_image', to: 'creatures#upload_image', as: 'creature_upload_image'

  resources :factions
  post '/factions/:id/upload_image', to: 'factions#upload_image', as: 'faction_upload_image'

  resources :locations
  post '/locations/:id/upload_hero_image', to: 'locations#upload_hero_image', as: 'location_upload_hero_image'
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
