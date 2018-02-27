var initialState = [];

export default (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case 'GET_TODO': 
            return [...state, ...action.payload];
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'UPDATE_TODO':
            return [...state.slice(0, action.payload.index), action.payload.todo, ...state.slice(action.payload.index+1)];
        default: 
            return state;
    }
}