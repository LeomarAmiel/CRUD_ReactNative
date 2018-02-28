import { combineReducers } from 'redux';
import TodoReducer from './todoReducer';
import AddTodoReducer from './addTodoReducer';
import VisibilityReducer from './visibilityReducer';

export default combineReducers({
    todo: TodoReducer,
    addTodo: AddTodoReducer,
    filter: VisibilityReducer
})