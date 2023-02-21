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

    resources :magic_items, only: [:index, :create, :destroy, :show, :update]
    post '/magic_items/:id/upload_image', to: 'magic_items#upload_image', as: 'magic_item_upload_image'

    resources :spells, only: [:index, :create, :destroy, :show, :update]

    resources :users, only: [:index]
  end

  post 'auth/login', to: 'authentication#login'
  root 'react#index'
  get '*path', to: 'react#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
