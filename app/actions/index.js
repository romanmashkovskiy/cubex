export const select = (user) => {
    return {
        type: "USER_SELECTED",
        payload: user
    }
};

export const filter = (text) => {
    return {
        type: "FILTER_LIST",
        payload: text
    }
};