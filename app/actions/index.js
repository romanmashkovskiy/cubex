export const select = (contact) => {
    return {
        type: "CONTACT_SELECTED",
        payload: contact
    }
};

export const filter = (text) => {
    return {
        type: "FILTER_LIST",
        payload: text
    }
};

export const addContact = (contact) => {
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
};