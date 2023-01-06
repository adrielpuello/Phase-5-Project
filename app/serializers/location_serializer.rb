class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :event_type, :address
end
