Rails.application.routes.draw do
  resources :trips
  resources :users, only: [:index, :show, :create]
  resources :locations
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  root to: "static#home"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#logout"
  get "/logged_in", to: "sessions#logged_in"
  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
