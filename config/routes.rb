Rails.application.routes.draw do
  resources :rooms

  resources :hotels, only: [ :create, :destroy]
  post "/login", to: "sessions#index"

  get "/me", to: "users#show"

  delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
