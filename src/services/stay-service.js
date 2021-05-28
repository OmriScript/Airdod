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
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633001/houses/paris1_ikkczy.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633001/houses/paris5_xdlchl.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633002/houses/paris2_sejf2c.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633000/houses/paris3_k3d2mo.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633000/houses/paris4_qyxvjr.jpg"
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
                id: "madeId101",
                txt: "Very helpful hosts. Cooked traditional...",
                rate: 4,
                by: {
                    _id: "u101",
                    fullname: "user1",
                    imgUrl: "/img/img1.jpg"
                }
            },
            {
                id: "madeId102",
                txt: "Very clear",
                rate: 3,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "Very clear",
                rate: 4,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "/img/img3.jpg"
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
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638010/houses/parisFive1_feabwr.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638009/houses/parisFive2_u7yyny.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638009/houses/parisFive2_u7yyny.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638009/houses/parisFive4_tsjxrt.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638010/houses/parisFive5_u96b18.jpg"
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
            "https://res.cloudinary.com/ariecloud/image/upload/v1606637481/houses/parisFour1_jxnu1d.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606637481/houses/parisFour2_xbfuyv.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606637481/houses/parisFour3_mla6tp.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606637481/houses/parisFour4_umhl7k.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606637481/houses/parisFour5_zvfav2.jpg"
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
    },
    {
        _id: "10006556",
        name: "Cosy Studio London",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635715/houses/tokyoTwo1_qzl2ft.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635715/houses/tokyoTwo4_iyh79l.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635716/houses/tokyoTwo5_ueqlek.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635714/houses/tokyoTwo2_rrvxnm.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635715/houses/tokyoTwo3_q8wehk.jpg"
        ],
        price: 210.00,
        summary: "This lovely two-bedroom apartment sleeping max 4 guests is located in the heart of Holland Park, just minutes away from multiple tube stations. The apartment has been recently refurbished in a modern style, featuring a fully equipped kitchen. It features comfortable furniture throughout the apartment.",
        capacity: 4,
        amenities: [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Cooking basics"
        ],
        host: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "UK",
            countryCode: "UK",
            address: "London, UK",
            lat: 8.61308,
            lng: -41.1413
        },
        reviews: [
            {
                id: "madeId101",
                txt: "Very helpful hosts. Cooked traditional...",
                rate: 4,
                by: {
                    _id: "u101",
                    fullname: "user1",
                    imgUrl: "/img/img1.jpg"
                }
            },
            {
                id: "madeId102",
                txt: "Very clear",
                rate: 3,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "Very clear",
                rate: 4,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "/img/img3.jpg"
                }
            }
        ],
        likedByUserIds: [
            "u101",
            "u102",
            "u103"
        ]
    },
    {
        _id: "10006555",
        name: "Cosy Studio London",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635076/houses/tokyo1_z0qs7g.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635076/houses/tokyo2_ohfxlg.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635076/houses/tokyo3_yzlnmk.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635076/houses/tokyo4_xvihea.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635076/houses/tokyo5_an6j0x.jpg"
        ],
        price: 250.00,
        summary: "Comfortable furniture throughout the apartment.",
        capacity: 5,
        amenities: [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Cooking basics"
        ],
        host: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "UK",
            countryCode: "UK",
            address: "London, UK",
            lat: 8.61308,
            lng: -41.1413
        },
        reviews: [
            {
                id: "madeId101",
                txt: "Very helpful hosts. Cooked traditional...",
                rate: 4,
                by: {
                    _id: "u101",
                    fullname: "user1",
                    imgUrl: "/img/img1.jpg"
                }
            },
            {
                id: "madeId102",
                txt: "Very clear",
                rate: 3,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "Very clear",
                rate: 4,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "/img/img3.jpg"
                }
            }
        ],
        likedByUserIds: [
            "u101",
            "u102",
            "u103"
        ]
    },
    {
        _id: "10006557",
        name: "Cosy London",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606476017/users/manhaten1_yaiizk.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606476017/users/manhaten2_qx3pag.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606476017/users/manhaten3_kzfcdd.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606477432/users/manhaten4_i5xjn3.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606476017/users/manhaten5_dtpzhl.jpg"
        ],
        price: 230.00,
        summary: "The apartment has been recently refurbished in a modern style, featuring a fully equipped kitchen. It features comfortable furniture throughout the apartment.",
        capacity: 6,
        amenities: [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Cooking basics"
        ],
        host: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "UK",
            countryCode: "UK",
            address: "London, UK",
            lat: 8.61308,
            lng: -41.1413
        },
        reviews: [
            {
                id: "madeId101",
                txt: "Very helpful hosts. Cooked traditional...",
                rate: 4,
                by: {
                    _id: "u101",
                    fullname: "user1",
                    imgUrl: "/img/img1.jpg"
                }
            },
            {
                id: "madeId102",
                txt: "Very clear",
                rate: 3,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "Very clear",
                rate: 4,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "/img/img3.jpg"
                }
            }
        ],
        likedByUserIds: [
            "u101",
            "u102",
            "u103"
        ]
    },
    {
        _id: "10006558",
        name: "A Studio in London",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635732/users/new-newyork1_h8khpy.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635732/users/new-newyork2_oa49ku.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635732/users/new-newyork3_odi6cn.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635732/users/new-newyork4_zxtxbv.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635732/users/new-newyork5_j8c4xy.jpg"
        ],
        price: 150.00,
        summary: "Just minutes away from multiple tube stations. The apartment has been recently refurbished in a modern style, featuring a fully equipped kitchen. It features comfortable furniture throughout the apartment.",
        capacity: 2,
        amenities: [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Cooking basics"
        ],
        host: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "UK",
            countryCode: "UK",
            address: "London, UK",
            lat: 8.61308,
            lng: -41.1413
        },
        reviews: [
            {
                id: "madeId101",
                txt: "Very helpful hosts. Cooked traditional...",
                rate: 4,
                by: {
                    _id: "u101",
                    fullname: "user1",
                    imgUrl: "/img/img1.jpg"
                }
            },
            {
                id: "madeId102",
                txt: "Very clear",
                rate: 3,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "Very clear",
                rate: 4,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "/img/img3.jpg"
                }
            }
        ],
        likedByUserIds: [
            "u101",
            "u102",
            "u103"
        ]
    },
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