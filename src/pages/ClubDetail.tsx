    import { useParams } from 'react-router-dom';
import { clubs } from '../data/clubs';
import { useEffect, useState } from 'react';

export default function ClubDetail() {
  const { clubId } = useParams();
  const club = clubs.find((c) => c.id === clubId);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
    if (joinedClubs.includes(clubId)) {
      setJoined(true);
    }
  }, [clubId]);

  const handleJoin = () => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
    if (!joinedClubs.includes(clubId)) {
      joinedClubs.push(clubId);
      localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
      setJoined(true);
    }
  };

  if (!club) {
    return (
      <div className="p-6 text-center text-red-600">
        <h1 className="text-2xl font-bold">Club not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={club.image}
        alt={club.name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold text-blue-600 mb-2">{club.name}</h1>
      <p className="text-gray-700 mb-6">{club.description}</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Upcoming Events</h2>
        <ul className="list-disc list-inside text-sm mt-2 text-gray-600">
          {club.events.map((event, index) => (
            <li key={index}>
              {event.name} – {event.date}
            </li>
          ))}
        </ul>
      </div>

      {joined ? (
        <p className="text-green-600 font-semibold">You have joined this club!</p>
      ) : (
        <button
          onClick={handleJoin}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Join Club
        </button>
      )}
    </div>
  );
}
