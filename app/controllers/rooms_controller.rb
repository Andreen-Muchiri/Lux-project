class RoomsController < ApplicationController

    # GET/rooms
     def index
            rooms = Room.all
            render json: rooms, status: :ok
    end

    # GET/room/:id
    def show
   rooms = Room.find(params[:id])
   if rooms
    render json: rooms, status: :ok
   else
    render json: {error: "Room Not Found"}, status: :not_found
   end

#    POST/room/:id
def create
 room = Room.create(room_params)
 render json: room, status: :created
end

# UPDATE/room/:id
  def patch
    room = Room.find_by(id: params[:id])
    if room
        render json: room
    else
        render json: {error: "Room not found"}, status: :not_found
    end
  end

#   DESTROY/room/:id
 def DESTROY
   room = Room.find_by(id: params[:id])
    if room
   room.destroy
   head :no_content
    else
        render json: {error: "Room not found"}, status: :not_found
    end
end

private
def room_params
  params.permit(:name, :image, :price)
end
end


    
end
