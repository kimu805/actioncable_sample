Rails.application.routes.draw do
  get 'rooms/show'
  root to: "rooms#show"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
