import express from 'express';
import { addTodo, getTodos, toggletodoDone, updateTodo, deleteTodo  } from '../controller/todocontroller.js';


const route = express.Router();
 
route.post('/tasks', addTodo);
route.get('/tasks', getTodos);
route.get('/tasks/:id', toggletodoDone);
route.put('/tasks/:id', updateTodo);
route.delete('/tasks/:id', deleteTodo)
export default route;