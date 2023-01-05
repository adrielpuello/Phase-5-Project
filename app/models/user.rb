class User < ApplicationRecord
    has_secure_password
    has_many :routes
    has_many :locations, through: :routes

    validates_presence_of :email
    validates_uniqueness_of :email
end