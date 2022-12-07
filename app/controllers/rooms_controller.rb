class RoomsController < ApplicationController

    def index
        def index
            rooms = Room.all
            render json: rooms, status: :ok
        end
    
    end
end
