import pic1 from './images/steag_U.jpg'
import pic2 from './images/cana-cluj.jpg'
import pic3 from './images/cort-2-persoane.jpg'
import pic4 from './images/electric-castle-alb.jpg'
import pic5 from './images/pony_car.jpg'
import pic6 from './images/tricout-Cluj-Napoca.jpg'


export function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

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
    completed: 'Completed'
};

export const Categories = {
    socialAssistance: 'social assistance',
    trash: 'trash',
    parking: 'parking',
    //TODO add more categories maybe???
};

export const StatusToColor = {
    inProgress: "#1A237E",
    approved: "#5C6BC0",
    completed: "#9FA8DA"
};

export const CategoryToIcon = {
    socialAssistance: "people",
    parking: "local_parking",
    trash: "restore_from_trash"
};

export const Markers = [
    {
        nr: 1,
        lat: 46.770,
        lng: 23.590,
        category: Categories.trash,
        status: Status.inProgress,
        votes: 0,
        beenVoted: false,
        userComments: ["Good ideea"],
        adminComments: ["Please be more precise" +
        ""],
        description: "Problema la gunoi"
    },
    {
        nr: 2,
        lat: 46.771,
        lng: 23.590,
        category: Categories.parking,
        status: Status.completed,
        votes: 0,
        beenVoted: false,
        userComments: ["Good ideea"],
        adminComments: ["Done!!"],
        description: "Cineva a parcat in fata locului meu si nu pot iesi"
    },
    {
        nr: 3,
        lat: 46.770,
        lng: 23.589,
        category: Categories.socialAssistance,
        status: Status.approved,
        votes: 2,
        beenVoted: false,
        userComments: ["Good ideea"],
        adminComments: ["Somebody will take care of it in one-two days"],
        description: "Un grup de oameni fara adapost s-au stabilit sub pod"
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
