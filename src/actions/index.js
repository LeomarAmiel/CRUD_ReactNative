import db from '../firebase';

export const fetchFromFirebase = () => (dispatch) => (
    db.collection('todos').doc('TMts7PEm7oyYJAMk0nVQ').get()
        .then((doc) => (
            dispatch(fetchData(doc.data().todo))
        ))
);

export const addToFirebase = (todo) => (dispatch) => (
    db.collection('todos').doc('TMts7PEm7oyYJAMk0nVQ').get()
        .then((doc) => {
            console.log(todo);
            db.doc('todos/TMts7PEm7oyYJAMk0nVQ').set({
                todo: [...doc.data().todo, todo]
            });
            dispatch(addTodo(todo));
            dispatch(finishAddTodo());
        })
);

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

const finishAddTodo = () => ({
    type: "FINISH_ADDTODO"
})