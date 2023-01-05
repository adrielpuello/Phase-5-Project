class TripLocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :stops

  has_many :locations
end
