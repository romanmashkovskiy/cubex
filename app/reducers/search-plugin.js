import usersList from './users';

const initialState = usersList();

export default function (state=initialState, action) {
    switch (action.type) {
        case "FILTER_LIST":
            {
                let filteredList = initialState.filter(function(user){
                    return user.name.toLowerCase().search(action.payload.toLowerCase())!== -1;
                });
                return (filteredList);
            }
        default:
            return state;
    }
}