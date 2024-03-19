import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TasksContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTasks, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        try {
          const task = await getTask(params.id);
          setValue('title', task.title);
          setValue('description', task.description);
          console.log(params.id);
        } catch (error) {
          console.error('Error fetching task:', error);
        }
      }
    }
  
    loadTask();
  }, [params.id, getTask, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
    } else {
      await createTasks(data);
    }
    navigate('/tasks');
  });

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold text-white mb-8">Task Form</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-white">
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register('title')}
              className="mt-1 block w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-white">
              Description
            </label>
            <textarea
              id="description"
              rows="3"
              {...register('description')}
              className="mt-1 block w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Save
          </button>
        </form>
        <Link to="/tasks" className="block text-center mt-4 text-blue-500 hover:underline">
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default TaskFormPage;
