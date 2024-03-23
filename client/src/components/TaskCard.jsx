import { Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext";

function TaskCard({ task }) {

    const {deleteTask} = useTasks()
    return (
      <div className="bg-white shadow-md rounded-md p-4 h-full">
        <h1 className="text-sm font-bold mb-2">{task.title}</h1>
        <p className="text-gray-700 text-xs">{task.description}</p>
        <div className="flex justify-end mt-2">
          <button onClick={() => {
            deleteTask(task._id);
          }}className="bg-red-500 hover:bg-red-600 text-white font-bold py-0.5 px-1 rounded mr-2 text-sm">Delete</button>
          <Link to={`/tasks/${task._id}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-0.5 px-1 rounded text-sm">Edit</Link>
        </div>
        <p className="text-gray-500 text-xs mt-2">
          {new Date(task.date).toLocaleDateString()}
        </p>
      </div>
    );
  }
  
  export default TaskCard;
  