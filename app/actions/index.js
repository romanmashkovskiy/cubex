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

export const deleteContact = (contact) => {
    return {
        type: "DELETE_CONTACT",
        payload: contact
    }
};

export const editContact = (contact) => {
    return {
        type: "EDIT_CONTACT",
        payload: contact
    }
};

export const setAddMode = (mode) => {
    return {
        type: "ADD_MODE",
        payload: mode
    }
};

export const setEditMode = (contact, mode) => {
    return {
        type: "EDIT_MODE",
        contact: contact,
        mode: mode
    }
};

