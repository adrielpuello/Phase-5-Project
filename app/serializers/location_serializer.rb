class LocationSerializer < ActiveModel::Serializer
  attributes :id, :rating, :ranking, :price, :type, :name, :address, :phone_number, :website
end
