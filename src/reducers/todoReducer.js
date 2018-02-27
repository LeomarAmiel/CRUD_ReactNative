const initialState = [];

export default (state = initialState, action) => {
    switch(action.type){
        case 'GET_TODO': 
            return [...state, ...action.payload];
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'UPDATE_TODO':
            return action.payload;
        default: 
            return state;
    }
}