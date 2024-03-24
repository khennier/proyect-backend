import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { isAuthenticated, user } = useAuth();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">User Profile</h1>
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-white">
            { isAuthenticated && (
              <h1 className="text-lg text-gray-200"> Name: {user.username}</h1>
            )
            }
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white">
          { isAuthenticated && (
              <h1 className="text-lg text-gray-200"> Email: {user.email}</h1>
            )
            }
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
