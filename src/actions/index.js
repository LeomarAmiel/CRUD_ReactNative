import db from '../firebase';

export const fetchFromFirebase = () => (dispatch) => (
    db.collection('todos').doc('TMts7PEm7oyYJAMk0nVQ').get()
        .then((doc) => (
            dispatch(fetchData(doc.data().todo))
        ))
        .catch(err => console.log(err))
);

export const addToFirebase = (todo) => (dispatch) => (
    db.collection('todos').doc('TMts7PEm7oyYJAMk0nVQ').get()
        .then((doc) => {
            db.doc('todos/TMts7PEm7oyYJAMk0nVQ').set({
                todo: [...doc.data().todo, {todo, completed: false, id: doc.data().todo.length}]
            })   
            .catch(err => console.log(err))
            dispatch(addTodo({todo, completed: false, id: doc.data().todo.length}));
            dispatch(finishAddTodo());
        })
        .catch(err => console.log(err))
    );

export const updateTodoOnFirebase = (index, todo) => (dispatch) => (
    db.collection('todos').doc('TMts7PEm7oyYJAMk0nVQ').get()
    .then((doc) => {
        data = doc.data().todo;
        db.doc('todos/TMts7PEm7oyYJAMk0nVQ').set({
            todo: [...data.slice(0, index), { id: index, todo, completed: false }, ...data.slice(index+1)]
        })
        .then(() => dispatch(updateTodo([...data.slice(0, index), { id: index, todo, completed: false }, ...data.slice(index+1)])))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
)

export const completeTodoOnFirebase = (index, todo, completed) => (dispatch) => (
    db.collection('todos').doc('TMts7PEm7oyYJAMk0nVQ').get()
    .then((doc) => {
        data = doc.data().todo;
        db.doc('todos/TMts7PEm7oyYJAMk0nVQ').set({
            todo: [...data.slice(0, index), { id: index, todo, completed: !completed }, ...data.slice(index+1)],
        })
        .then(() => dispatch(updateTodo([...data.slice(0, index), { id: index, todo, completed: !completed }, ...data.slice(index+1)])))
        .catch(err => console.log(err))
    })
)

export const showCompleted = (payload) => ({
    type: "SHOW_COMPLETED",
    payload
})

const fetchData = (payload) => ({
    type: "GET_TODO",
    payload
});

const addTodo = (payload) => ({
    type: "ADD_TODO",
    payload
});

export const changeAddTodo = (payload) => ({
    type: "CHANGE_ADDTODO",
    payload
});

const updateTodo = (payload) => ({
    type: "UPDATE_TODO",
    payload
})

const finishAddTodo = () => ({
    type: "FINISH_ADDTODO"
})