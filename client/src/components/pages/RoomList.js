import RoomCard from "./RoomCard";

function RoomList({ rooms }) {
  return (
    <div className="cards-container" style={{display: 'flex', flexDirection: 'row'}} >
      {rooms.map((room) => {
        return <RoomCard key={room.id} room={room} />;
      })}
    </div>
  );
}

export default RoomList;