import RoomCard from "./RoomCard";

function RoomList({ rooms }) {
  return (
    <ul className="cards">
      {rooms.map((room) => {
        return <RoomCard key={room.id} room={room} />;
      })}
    </ul>
  );
}

export default RoomList;