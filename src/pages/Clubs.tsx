import { useState } from 'react';
import { clubs } from '../data/clubs';
import { Link } from 'react-router-dom';

export default function Clubs() {
  const [sortOrder, setSortOrder] = useState<'az' | 'za'>('az');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const sortedClubs = [...clubs].sort((a, b) =>
    sortOrder === 'az'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Explore Clubs</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as 'az' | 'za')}
          className="p-2 border rounded"
        >
          <option value="az">Name A-Z</option>
          <option value="za">Name Z-A</option>
        </select>

        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-2 border rounded ${
              viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-2 border rounded ${
              viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            List
          </button>
        </div>
      </div>

      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'flex flex-col gap-4'
        }
      >
        {sortedClubs.map((club) => (
          <div
            key={club.id}
            className="border rounded shadow-sm p-4 bg-white hover:shadow-md transition"
          >
            <img
              src={club.image}
              alt={club.name}
              className="h-40 w-full object-cover rounded mb-3"
            />
            <h2 className="text-xl font-semibold">{club.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{club.shortDescription}</p>
            <Link
              to={`/clubs/${club.id}`}
              className="text-sm text-blue-600 hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
