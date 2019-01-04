import pic1 from './images/steag_U.jpg'
import pic2 from './images/cana-cluj.jpg'
import pic3 from './images/cort-2-persoane.jpg'
import pic4 from './images/electric-castle-alb.jpg'
import pic5 from './images/pony_car.jpg'
import pic6 from './images/tricout-Cluj-Napoca.jpg'

export const accounts = {
    adminAccount: {
        username: 'admin',
        password: 'password',
        role: 'admin'
    },
    userAccount: {
        username: 'user',
        password: 'password',
        role: 'user',
        coins: 100
    }

};


export const Status = {
    inProgress: 'In Progress',
    approved: 'Approved',
    denied: 'Denied',
    completed: 'Completed'
};

export const Categories = {
    socialAssistance: 'social assistance',
    thrash: 'thrash',
    parking: 'parking',
    //TODO add more categories maybe???
};


export const Markers = [
    {
        nr: 1,
        lat: 46.77,
        lng: 23.59,
        category: Categories.thrash,
        status: Status.inProgress,
        votes: 0,
        beenVoted: false,
        userComments: ["Good ideea"],
        adminComments: ["Please be more precise" +
        ""],
        description: "Problema la gunoi"
    }
];

export const shoppingPageUrl = '/shoppingPage';
export const homePageUrl = "/home";

export const shoppingItems = [
    {
        image: pic1,
        title: "Steag \"U\" Cluj",
        description: "Steag \"U\" Cluj din sezonul 2018-2019, folosita de peluza \"Sepcile Rosii\"",
        price: 20
    },
    {
        image: pic2,
        title: "Cana Cluj",
        description: "Cana cu \"I love Cluj\" in editie limitata, disponibila doar la zilele" +
            " orasului",
        price: 10
    },
    {
        image: pic3,
        title: "Cort 2 persoane",
        description: "Cort durabil si hidroizolat pentru 2 persoane, rezista la -30 grade.",
        price: 50
    },
    {
        image: pic4,
        title: "Tricou Electric Castle",
        description: "Tricou cu Electric Castle din editia 2018, editie limitata. Disponibil" +
            " toate marimile",
        price: 20
    },
    {
        image: pic5,
        title: "Abonament Pony Car",
        description: "Abonament Pony Car care ofera 20 de curse gratuite",
        price: 100
    },
    {
        image: pic6,
        title: "Tricou Cluj-Napoca",
        description: "Tricou Cluj-Napoca disponibil in editie limitata, toate marimile.",
        price: 20
    },
];
