export default function (state=false, action) {
    switch (action.type) {
        case "ADD_MODE":
            return action.payload;
        default:
            return state;
    }
}