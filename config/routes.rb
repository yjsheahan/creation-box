Rails.application.routes.draw do
  get 'studio', to: 'pages#studio', as: :studio
  get 'events', to: 'pages#events', as: :events
  get 'training', to: 'pages#training', as: :training
  get 'contact', to: 'pages#contact', as: :contact
  get 'message', to: 'pages#message', as: :message
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
