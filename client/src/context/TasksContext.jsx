import { createContext, useContext, useState } from "react";
import { createTasksRequest, getTasksRequest, deleteTasksRequest, getTaskRequest, updateTasksRequest } from "../api/tasks";

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
    console.log(res);
    }

    const deleteTask = async (id) => {
        const res = await deleteTasksRequest(id)
        console.log(res);

    }

    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id)
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
        }

    }
    const updateTask = async (id, task) => {
        try {
            await updateTasksRequest(id, task)
        } catch (error) {
            console.log(error);
        }
    }


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
