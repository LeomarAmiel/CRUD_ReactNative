import { combineReducers } from 'redux';
import TodoReducer from './todoReducer';
import AddTodoReducer from './addTodoReducer';

export default combineReducers({
    todo: TodoReducer,
    addTodo: AddTodoReducer
})