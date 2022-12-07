import { useEffect, useState } from "react";
import RoomList from "./RoomList";
import Search from "./Search";


function RoomPage() {
    const [rooms, setRooms] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
      // no need to use http://localhost:3000 here
      fetch("http://localhost:3000/rooms")
        .then((r) => r.json())
        .then((roomsArray) => {
          setRooms(roomsArray);
        });
    }, []);
  
    // function handleAddRoom(newRoom) {
    //   const updatedRoomsArray = [...rooms, newRoom];
    //   setRooms(updatedRoomsArray);
    // }
  
    const displayedRooms = rooms.filter((room) => {
      return room.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  
    return (
      <main>
        {/* <NewRoomForm onAddRoom={handleAddRoom} /> */}
        <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <RoomList rooms={displayedRooms} />
      </main>
    );
  }
  
  export default RoomPage;
  