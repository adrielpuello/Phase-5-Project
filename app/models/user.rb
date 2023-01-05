class User < ApplicationRecord
    has_many :routes
    has_many :locations, through: :routes
end