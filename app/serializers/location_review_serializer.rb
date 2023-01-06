class LocationReviewSerializer < ActiveModel::Serializer
  attributes :name, :event_type, :address

  has_many :reviews
end
