let contacts = [
    {
        id: 1,
        name: "Иван Иванов",
        company: "Microsoft",
        email: "ivanov@microsoft.com",
        phone: "111-1111-1111",
        picture: "https://avatarko.ru/img/kartinka/15/multfilm_ochki_Simpsons_Homer_14019.jpg",
        editMode: false
    },
    {
        id: 2,
        name: "Петр Петров",
        company: "Google",
        email: "petrov@gmail.com",
        phone: "222-2222-2222",
        picture: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png",
        editMode: false
    },
    {
        id: 3,
        name: "Сергей Сидоров",
        company: "Facebook",
        email: "sidorov@facebook.com",
        phone: "333-3333-3333",
        picture: "https://avatarko.ru/img/kartinka/14/multfilm_Simpsons_Homer_13344.jpg",
        editMode: false
    },
    {
        id: 4,
        name: "Александр Иванов",
        company: "Apple",
        email: "ivanov@facebook.com",
        phone: "444-4444-4444",
        picture: "https://avatarko.ru/img/kartinka/1/Gomer_s_pistoletom.jpg",
        editMode: false
    }
];

export default function (state=contacts, action) {
    switch (action.type) {
        case "ADD_CONTACT":
        {
            let maxId = 0;
            state.forEach(function(item) {
                if (item.id > maxId) maxId = item.id;
            });
            const newContact = {
                id: ++maxId,
                name: action.payload.name,
                company: action.payload.company,
                email: action.payload.email,
                phone: action.payload.phone,
                picture: action.payload.picture,
                editMode: false
            };
            return [...state, newContact];


        }
        case "DELETE_CONTACT":
        {
            const delIndex = state.findIndex((item) => action.payload.id === item.id);
            if (delIndex === -1) console.error("No contact to delete");
            let filteredList = state.filter(function(contact, index){
                return index !== delIndex;
            });
            return [...filteredList];

        }
        case "EDIT_CONTACT":
        {
            const replIndex = state.findIndex((item) => action.payload.id === item.id);
            if (replIndex === -1) console.error("No contact to update");
            state[replIndex] = action.payload;
            return [...state];
        }
        case "EDIT_MODE":
        {
            const editIndex = state.findIndex((item) => action.contact.id === item.id);
            if (editIndex === -1) console.error("No contact to set edit mode");
            state[editIndex].editMode = action.mode;
            return [...state];
        }
        default:
            return state;
    }
}