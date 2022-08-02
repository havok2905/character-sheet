Rails.application.routes.draw do

  if Rails.env.production?
    default_url_options :host => 'localhost:3000'
  else
    default_url_options :host => 'localhost:3000'
  end

  scope(:path => '/api') do
    resources :characters, only: [:index, :create, :destroy, :show, :update]
    post '/characters/:id/upload_image', to: 'characters#upload_image', as: 'character_upload_image'

    resources :creatures, only: [:index, :create, :destroy, :show, :update]
    post '/creatures/:id/upload_image', to: 'creatures#upload_image', as: 'creature_upload_image'

    get '/exports/json', to: 'exports#json', as: 'exports_json'
    get '/exports/json_download', to: 'exports#json_download', as: 'exports_json_download'

    resources :factions, only: [:index, :create, :destroy, :show, :update]
    post '/factions/:id/upload_image', to: 'factions#upload_image', as: 'faction_upload_image'

    resources :locations, only: [:index, :create, :destroy, :show, :update]
    post '/locations/:id/upload_hero_image', to: 'locations#upload_hero_image', as: 'location_upload_hero_image'
    post '/locations/:id/upload_sigil', to: 'locations#upload_sigil', as: 'location_upload_sigil'
    post '/locations/:id/upload_map', to: 'locations#upload_map', as: 'location_upload_map'

    resources :pins, only: [:create, :destroy, :update]

    resources :magic_items, only: [:index, :create, :destroy, :show, :update]
    post '/magic_items/:id/upload_image', to: 'magic_items#upload_image', as: 'magic_item_upload_image'

    resources :spells, only: [:index, :create, :destroy, :show, :update]

    resources :wiki, only: [:index, :create, :destroy, :show, :update]
    post '/wiki/:id/upload_hero_image', to: 'wiki#upload_hero_image', as: 'wiki_upload_hero_image'
  end

  devise_for :users, :skip => [:registrations]
  resources :users, only: [:create, :destroy, :edit, :index]
  patch '/users/:id/update_email', to: 'users#update_email', as: 'user_update_email'
  patch '/users/:id/update_role', to: 'users#update_role', as: 'user_update_role'
  patch '/users/:id/update_password', to: 'users#update_password', as: 'user_update_password'
  patch '/users/:id/update_username', to: 'users#update_username', as: 'user_update_username'

  root 'react#index'
  get '*path', to: 'react#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
