class HotelsController < ApplicationController
     # POST/hotel/:id
     def create
     hotel = Hotel.create(hotel_params)
      render json: room, status: :created
    end

    # DESTROY/hotel/:id
    def destroy
    hotel = Hotel.find_by(id: params[:id])
    if hotel
    hotel.destroy
    head :no_content
    else
        render json: {error: "Room not found"}, status: :not_found
    end

end
    private
 def hotel_params
    params.permit(:city, :name, :room_type, :price)
end
end
