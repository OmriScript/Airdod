import storageService from './async-storage.js'

export const stayService = {
    query,
    getById,
    save,
    removeStay
}

const KEY = 'stay'
const gStays = [
    {
        _id: "10006546",
        name: "Ribeira Charming Duplex",
        imgUrls: [
            "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
            "otherImg.jpg"
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
    }
]

loadStays();

function loadStays() {
    console.log('load');
    storageService._save(KEY, gStays)
}

async function query(filterBy) {
    // const toys = await axios.get(BASE_URL, { params: filterBy })
    // return toys.data
    return await storageService.get(KEY, filterBy)
}

async function getById(toyId) {
    // const toy = axios.get(`${BASE_URL}/${toyId}`)
    // return toy.data
    return await storageService.get(toyId)
}

async function save(toy) {
    if (toy._id) {
        // return axios.put(`${BASE_URL}/${toy._id}`, toy).then(res => res.data)
        return await storageService.put(KEY, toy)
    } else {
        // return axios.post(BASE_URL, toy).then(res => res.data)
        return await storageService.post(KEY, toy)
    }
}

async function removeStay(stayId) {
    // const toy = await axios.delete(`${BASE_URL}/${toyId}`)
    // return toy.data
    return await storageService.remove(KEY, stayId)
}