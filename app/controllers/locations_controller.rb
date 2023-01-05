class LocationsController < ApplicationController
    def index
        render json: Location.all, status: :ok
    end

    def show
        location = find_location
        render json: location, status: :ok
    end

    def create
        location = Location.create!(location_params)
        render json: location, status: :created
    end

    def destroy
        Location = find_Location
        Location.destroy
        head :no-content
    end

    private

    def find_Location
        Location.find(params[:id])
    end

    def location_params
        params.permit(:rating, :ranking, :price, :type, :name, :address, :phone_number, :website)
    end
end
