import { createContext, useContext, useState } from "react";
import { createTasksRequest, getTasksRequest, deleteTasksRequest, getTaskRequest, updateTasksRequest } from "../api/tasks.js";


const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("useTasks must be used within a TaskProvider");
    }

    return context; 
};

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([])
    const getTasks = async () => { 
        try {
            const res = await getTasksRequest()
            setTasks(res.data)
        } catch (error) {
            console.log(error);
            
        }
    }


    const createTasks = async (task) => {
    const res = await createTasksRequest(task)
    return res
    }

    const deleteTask = async (id) => {
        const res = await deleteTasksRequest(id)
        return res

    }

    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id);
            return res.data;
        } catch (error) {
            console.error('Error fetching task:', error);
            throw error;
        }
    }
    
    const updateTask = async (id, task) => {
        try {
            await updateTasksRequest(id, task)
        } catch (error) {
            console.log(error);
        }
    }
        {children}

    return (
        <TaskContext.Provider value={{
            tasks,
            createTasks,
            getTasks,
            deleteTask,
            getTask,
            updateTask
        }}>
        {children}
            
        </TaskContext.Provider>
    );
}

