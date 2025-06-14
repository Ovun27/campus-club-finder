import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-gray-500 mt-4">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 inline-block text-blue-600 hover:underline">Back to Home</Link>
    </div>
  );
}
