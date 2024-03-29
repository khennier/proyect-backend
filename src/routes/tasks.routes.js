import { Router } from "express"
import { authRequired } from "../middlewares/validateToken.js"
import { getTask, getTasks, createTasks, deleteTasks, updateTasks } from "../controllers/tasks.controller.js"
import {createTaskSchema} from '../schemas/task.schema.js'
import { validateSchema } from "../middlewares/validator.middleware.js"

const router = Router()
router.get('/tasks', authRequired, getTasks)
router.get('/tasks/:id', authRequired, getTask)
router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTasks)
router.delete('/tasks/:id', authRequired, deleteTasks )
router.put('/tasks/:id', authRequired, updateTasks)


export default router