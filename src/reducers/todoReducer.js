var initialState = [];

export default (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case 'GET_TODO': 
            return [...state, ...action.payload];
        case 'ADD_TODO':
            return [...state, action.payload];
        default: 
            return state;
    }
}