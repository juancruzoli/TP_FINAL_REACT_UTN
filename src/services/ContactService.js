    const contacts = [
        { 
        emisor: 'Momito',
        id: 1,
        descripcion: 'Un oso Wacho..',
        avatar: 'https://i.scdn.co/image/ab67656300005f1f6f2b26091c05a93ccb3b2566',
        lastConnection: '20.48',
        status: 'offline',
        messages: [
        
        {
        emisor: "YO",
        hora: "23:30",
        id: 1,
        texto: "Hola amigo, como estas?",
        status: "read",
        },

        {
        emisor: "OTRO",
        hora: "23:35",
        id: 2,
        texto: "Hola hermano, todo bien por aca. Decime",
        status: "read",
        },

        {
        emisor: "YO",
        hora: "23:45",
        id: 3,
        texto: "vos me podes prestar alguna cafetera de las que tengas??",
        status: "read",
        },

        {
        emisor: "OTRO",
        hora: "23:50",
        id: 4,
        texto: "No wacho estas loco",
        status: "read",
        },  
        ]
    },
    {
        emisor: 'Messi',
        id: 2,
        descripcion: 'fulvo',
        avatar: 'https://i.pinimg.com/474x/83/46/12/8346125abd62bacb57fe427601c355cb.jpg',
        lastConnection: '17.53',
        status: 'offline',
        messages: [
        
        {
        emisor: "YO",
        hora: "23:30",
        id: 1,
        texto: "Amigooo, como estas?",
        status: "read",
        },

        {
        emisor: "OTRO",
        hora: "23:35",
        id: 2,
        texto: "Loco como estas, todo bien aca, vos?",
        status: "read",
        },

        {
        emisor: "YO",
        hora: "23:45",
        id: 3,
        texto: "todo bien ",
        status: "read",
        },

        {
        emisor: "OTRO",
        hora: "23:50",
        id: 4,
        texto: "Estas para un partidito hoy?",
        status: "read",
        },

        {
        emisor: "YO",
        hora: "23:58",
        id: 5,
        texto: "Mi mama no me deja :(",
        status: "read",
        },
        ]

    },
    {   
        emisor: 'Mama',
        id: 4,
        descripcion: 'durmiendo....',
        avatar: 'https://imagenes.eltiempo.com/files/image_600_455/files/fp/uploads/2025/04/01/67ec4ef31f2ce.r_d.866-866-3464.jpeg',
        lastConnection: '23.22',
        status: 'offline',
        messages: [
        
        {
        emisor: "YO",
        hora: "23:52",
        id: 1,
        texto: "Hola ma",
        status: "read",
        },

        {
        emisor: "OTRO",
        hora: "23:53",
        id: 2,
        texto: "Hola hijo",
        status: "read",
        },

        {
        emisor: "YO",
        hora: "23:54",
        id: 3,
        texto: "Mama, puedo ir a jugar un picadito con Leo",
        status: "read",
        },

        {
        emisor: "OTRO",
        hora: "23:57",
        id: 4,
        texto: "No...",
        status: "read",
        },

        ]
    }
    ]

    export const getContactList = () => {
    return contacts
    }

    export const getContactById = (contact_id) => {
        for(const contact of contacts) {
            if (Number (contact.id) === Number (contact_id)) {
                return contact
            }
        }
        return null
    }

        
    