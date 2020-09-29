const initialState = {
    data: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
       
        case "insert":
         return{
                ...state,
                status : action.value
            }
            break;
    }
    return state;
};
export default reducer;