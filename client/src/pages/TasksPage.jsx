import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from '../components/TaskCard.jsx'

function TasksPage() {
    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        if (getTasks) {
            getTasks();
        }
    }, [getTasks]);

    if (tasks.length === 0) {
        return (
            <div className="flex flex-col h-screen items-center justify-center bg-gray-900">
                <div className="text-white text-center">
                    <h1 className="text-2xl font-bold mb-4">No Tasks</h1>
                    <Link to="/add-task" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md block mt-4 text-center">Create New Task</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center bg-gray-900">
            <div className="bg-zinc-800 max-w-screen-lg w-full p-10 rounded-md grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {tasks.map((task) => (
                    <TaskCard task={task} key={task._id}/>
                ))}
            </div>
            <Link to="/add-task" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md block mt-4 text-center">Create New Task</Link>
        </div>
    );
}

export default TasksPage;
