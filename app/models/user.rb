class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :locations, through: :reviews
    
    validates :email, :password, presence: true
    validates_presence_of :email
    validates_uniqueness_of :email
    validates :password, length: {minimum: 4, message: "Your password must have at least four characters"}
end