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
            var newArr = doc.data().todo;
            newArr.push(todo);
            dispatch(addTodo(newArr));
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