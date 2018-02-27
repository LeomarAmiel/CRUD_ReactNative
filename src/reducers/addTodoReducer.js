const initialState = '';

export default (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE_ADDTODO': 
            return action.payload;
        case 'FINISH_ADDTODO':
            return initialState;
        default: 
            return state;
    }
}