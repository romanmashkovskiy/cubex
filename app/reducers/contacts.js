let contacts = [
        {
            id: 1,
            name: "Иван Иванов",
            company: "Microsoft",
            email: "ivanov@microsoft.com",
            phone: "111-1111-1111",
            picture: "https://avatarko.ru/img/kartinka/15/multfilm_ochki_Simpsons_Homer_14019.jpg"
        },
        {
            id: 2,
            name: "Петр Петров",
            company: "Google",
            email: "petrov@gmail.com",
            phone: "222-2222-2222",
            picture: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png"
        },
        {
            id: 3,
            name: "Сергей Сидоров",
            company: "Facebook",
            email: "sidorov@facebook.com",
            phone: "333-3333-3333",
            picture: "https://avatarko.ru/img/kartinka/14/multfilm_Simpsons_Homer_13344.jpg"
        },
        {
            id: 4,
            name: "Александр Иванов",
            company: "Apple",
            email: "ivanov@facebook.com",
            phone: "444-4444-4444",
            picture: "https://avatarko.ru/img/kartinka/1/Gomer_s_pistoletom.jpg"
        }
    ];

export default function (state=contacts, action) {
    switch (action.type) {
        case "FILTER_LIST":
            {
                let filteredList = contacts.filter(function(contact){
                    return contact.name.toLowerCase().search(action.payload.toLowerCase())!== -1;
                });
                //return filteredList;
                return [...filteredList];
            }
        case "ADD_CONTACT":
            {
                let maxId = 0;
                state.forEach(function(item) {
                    if (item.id > maxId) maxId = item.id;
                });
                let newContact = {
                    id: ++maxId,
                    name: action.payload.name,
                    company: action.payload.company,
                    email: action.payload.email,
                    phone: action.payload.phone,
                    picture: action.payload.picture
                };
                // contacts.push(newContact);
                // console.log(contacts);
                console.log(newContact);
                return [...state, newContact];

            }
        default:
            return state;
    }
}