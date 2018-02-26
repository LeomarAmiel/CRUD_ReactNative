import db from '../firebase';

export const fetchData = () => (dispatch) => (
    db.collection('todos').doc('TMts7PEm7oyYJAMk0nVQ').get()
        .then((doc) => (
            dispatch(getData(doc.data().todo))
        ))
)

export const getData = (payload) => ({
    type: "GET_TODO",
    payload
})