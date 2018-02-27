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
                todo: [...doc.data().todo, todo]
            })        
            .catch(err => console.log(err))
            
            dispatch(addTodo(todo));
            dispatch(finishAddTodo());
        })
        .catch(err => console.log(err))
);

export const updateTodoToFirebase = (index, todo) => (dispatch) => (
    db.collection('todos').doc('TMts7PEm7oyYJAMk0nVQ').get()
    .then((doc) => {
        data = doc.data().todo;
        db.doc('todos/TMts7PEm7oyYJAMk0nVQ').set({
            todo: [...data.slice(0, index), todo, ...data.slice(index+1)]
        })
        .then(() => dispatch(updateTodo({index, todo})))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
)

export const fetchData = (payload) => ({
    type: "GET_TODO",
    payload
});

export const addTodo = (payload) => ({
    type: "ADD_TODO",
    payload
});

export const changeAddTodo = (payload) => ({
    type: "CHANGE_ADDTODO",
    payload
});

export const updateTodo = (payload) => ({
    type: "UPDATE_TODO",
    payload
})

const finishAddTodo = () => ({
    type: "FINISH_ADDTODO"
})