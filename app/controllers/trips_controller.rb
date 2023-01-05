class TripsController < ApplicationController
    def index
        render json: Trip.all, status: :ok
    end

    def show
     trip = find_trip
     render json: trip, serializer: TripLocationSerializer, status: :ok
    end

    def update
     trip = find_route
     trip.update!(route_params)
        render json: trip, status: :accepted
    end

    def create
     trip = Trip.create!(route_params)
        render json: trip, status: :created
    end

    def destroy
     trip = find_trip
     trip.destroy
     head :no_content
    end

    private

    def find_route
     Trip.find(params[:id])
    end

    def trip_params
        params.permit(:name, :stops)
    end
end
