class RoomsController < ApplicationController

    # GET/rooms
     def index
            rooms = Room.all
            render json: rooms, status: :ok
    end

    # GET/room/:id
    def show
   room = Room.find(params[:id])
   if room
    render json: room, status: :ok
   else
    render json: {error: "Room Not Found"}, status: :404
   end
end
    
end
