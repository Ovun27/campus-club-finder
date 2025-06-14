import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-center mt-20 p-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-2">Welcome to Campus Club Finder</h1>
      <p className="text-gray-600 mb-6">Find and join clubs that match your passion!</p>
      <Link to="/clubs" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Explore Clubs
      </Link>
    </div>
  );
}
