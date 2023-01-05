class Trip < ApplicationRecord
    has_many :locations
    has_many :users, through: :locations
end
