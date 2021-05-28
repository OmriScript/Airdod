import { asyncStorage } from './async-storage.js'

export const stayService = {
    query,
    getById,
    save,
    remove,
}

const KEY = 'stay'
const gStays = [
    {
        _id: "10006546",
        name: "Ribeira Charming Duplex",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning2_fzcrtp.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning3_p8fxak.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning4_fktfrf.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning1_fj7sai.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning5_sgfmv5.jpg"
        ],
        price: 80.00,
        summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
        capacity: 8,
        amenities: [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed",
            "Cooking basics"
        ],
        host: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "Portugal",
            countryCode: "PT",
            address: "Porto, Portugal",
            lat: -8.61308,
            lng: 41.1413
        },
        reviews: [
            {
                id: "madeId",
                txt: "Very helpful hosts. Cooked traditional...",
                rate: 4,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            }
        ],
        likedByUserIds: [
            "u101",
            "u102"
        ]
    },
    {
        _id: "10006547",
        name: "Charming Duplex",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning2_fzcrtp.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning3_p8fxak.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning4_fktfrf.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning1_fj7sai.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning5_sgfmv5.jpg"
        ],
        price: 500.00,
        summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
        capacity: 2,
        amenities: [
            "TV",
        ],
        host: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "Portugal",
            countryCode: "PT",
            address: "Porto, Portugal",
            lat: -8.61307,
            lng: 41.1412
        },
    },
    {
        _id: "10006548",
        name: "Ribeira Duplex",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning2_fzcrtp.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning3_p8fxak.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning4_fktfrf.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning1_fj7sai.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning5_sgfmv5.jpg"
        ],
        price: 55.00,
        summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
        capacity: 5,
        amenities: [
            "TV",
        ],
        host: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "Portugal",
            countryCode: "PT",
            address: "Porto, Portugal",
            lat: -8.61309,
            lng: 41.1412
        },
    },
    {
        _id: "10006549",
        name: "Very Charming Duplex",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning2_fzcrtp.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning3_p8fxak.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning4_fktfrf.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning1_fj7sai.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning5_sgfmv5.jpg"
        ],
        price: 40.00,
        summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
        capacity: 7,
        amenities: [
            "TV",
        ],
        host: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "Portugal",
            countryCode: "PT",
            address: "Porto, Portugal",
            lat: -8.61309,
            lng: 40.1413
        },
    }
]

asyncStorage._save(KEY, gStays);


async function query(filterBy) {
    // const toys = await axios.get(BASE_URL, { params: filterBy })
    // return toys.data
    const res = await asyncStorage.query(KEY, filterBy)
    return res
    // return await asyncStorage.getOne(KEY, filterBy)
}

async function getById(toyId) {
    // const toy = axios.get(`${BASE_URL}/${toyId}`)
    // return toy.data
    return await asyncStorage.getOne(toyId)
}

async function save(toy) {
    if (toy._id) {
        // return axios.put(`${BASE_URL}/${toy._id}`, toy).then(res => res.data)
        return await asyncStorage.put(KEY, toy)
    } else {
        // return axios.post(BASE_URL, toy).then(res => res.data)
        return await asyncStorage.post(KEY, toy)
    }
}

async function remove(stayId) {
    // const toy = await axios.delete(`${BASE_URL}/${toyId}`)
    // return toy.data
    return await asyncStorage.remove(KEY, stayId)
}