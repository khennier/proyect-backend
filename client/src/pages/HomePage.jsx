import { Link } from 'react-router-dom'
function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Welcome to Your Task Manager</h1>
      <Link
        to="/tasks"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
      >
        Go to Tasks
      </Link>
    </div>
  );
}

export default HomePage;
