Rails.application.routes.draw do
  resources :rooms

  resources :hotels, only: [ :create, :destroy]
 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
