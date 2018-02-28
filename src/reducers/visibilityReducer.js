const initialState = false;

export default (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_COMPLETED': 
            return action.payload;
        default: 
            return state;
    }
}