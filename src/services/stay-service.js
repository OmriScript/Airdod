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
        name: "GuestReady- Stylish Gaia APT",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633001/houses/paris1_ikkczy.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633001/houses/paris5_xdlchl.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633002/houses/paris2_sejf2c.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633000/houses/paris3_k3d2mo.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606633000/houses/paris4_qyxvjr.jpg"
        ],
        price: 37.00,
        type: 'Apartment',
        summary: "Practical and conveniently located 1 bedroom flat with all amenities for a comfortable stay. Centrally located to enjoy all the city has to offer! In this apartment can sleep up to 4 people comfortably",
        capacity: 4,
        amenities: [
            "TV",
            "Wi-Fi",
            "Kitchen",
            "Accessibility",
            "Air Conditioner",
            "Secured",
            "Fast food",
            "Parking",
            "Aid kit",
            "Public Transport"
        ],
        host: {
            _id: "51399391",
            fullname: "GuestReady",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "Portugal",
            city: "Porto",
            countryCode: "PT",
            address: "Vila Nova de Gaia, Porto, Portugal",
            lat: -8.61308,
            lng: 41.1413
        },
        reviews: [
            {
                id: "madeId101",
                txt: "As televisões não funcionam... o sofá das fotos não está na casa, o que está na casa é pequeno. Não tem microondas, é um mini forno. O exaustor não existe. A casa está situada numa zona agradável e tranquila, sendo até uma casa bastante agradável e espaçosa. O grande problema está na limpeza, a casa apresenta sujidade acumulada.",
                rate: 4,
                by: {
                    _id: "u101",
                    fullname: "Vanessa",
                    imgUrl: "/img/img1.jpg"
                }
            },
            {
                id: "madeId102",
                txt: "Very clean",
                rate: 5,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "O apartamento e excelente e super agradável ótimo local Acesso ótimo de estacionamento",
                rate: 5,
                by: {
                    _id: "u103",
                    fullname: "Carlos",
                    imgUrl: "/img/img3.jpg"
                }
            }
        ],
        houseRules: {
            isPets: true,
            isSmoking: false
        },
        likedByUserIds: [
            "u101",
            "u102"
        ],
    },
    {
        _id: "10006547",
        name: "Santa Catarina Prime Studios I",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638010/houses/parisFive1_feabwr.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638009/houses/parisFive2_u7yyny.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638009/houses/parisFive2_u7yyny.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638009/houses/parisFive4_tsjxrt.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606638010/houses/parisFive5_u96b18.jpg"
        ],
        price: 60.00,
        type: 'Entire home',
        summary: "Located on one of the most dynamic and central streets in Porto, the apartment is within walking distance of the main historical landmarks and attractions of the city. In addition, with the metro (Marquês) a few meters away, it is also easy to get anywhere in the city in a short time. Besides the fantastic location, Santa Catarina Prime Studios I has everything you need for a high quality stay.",
        capacity: 2,
        houseRules: {
            isPets: true,
            isSmoking: false
        },
        amenities: [
            "TV",
            "Wi-Fi",
            "Accessibility",
            "Secured",
            "Fast food",
            "Public Transport"
        ],
        host: {
            _id: "51399391",
            fullname: "BnBird Homes",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "Portugal",
            city: "Porto",
            countryCode: "PT",
            address: "Porto, Portugal",
            lat: -8.61307,
            lng: 41.1412
        },
        reviews: [
            {
                id: "madeId101",
                txt: "Very helpful hosts. Cooked traditional...",
                rate: 4,
                by: {
                    _id: "u101",
                    fullname: "Marcelo",
                    imgUrl: "/img/img1.jpg"
                }
            },
            {
                id: "madeId102",
                txt: "Very clean",
                rate: 3,
                by: {
                    _id: "u102",
                    fullname: "Bruno",
                    imgUrl: "/img/img2.jpg"
                }
            },
        ],
    },
    {
        _id: "10006548",
        name: "Ribeira Romantic Stay - River Views",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning2_fzcrtp.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning3_p8fxak.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning4_fktfrf.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning1_fj7sai.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning5_sgfmv5.jpg"
        ],
        price: 53.00,
        type: 'Entire home',
        summary: "Located in a renovated building with a high patrimonial value in Ribeira next to the Douro river - UNESCO World Heritage Site. This fully equipped studio will be your house in the heart of Porto. This new concept of hosting offers a greater immersion in the life and culture of the city. With a quality comfort and a distinct decoration, you will find your refuge with privileged views over one of the most authentic neighborhoods of Porto.",
        capacity: 5,
        houseRules: {
            isPets: false,
            isSmoking: true
        },
        amenities: [
            "TV",
            "Wi-Fi",
            "Air Conditioner",
            "Fast food",
            "Parking",
            "Public Transport"
        ],
        host: {
            _id: "51399391",
            fullname: "Jacquelina Pim",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "Portugal",
            city: "Porto rico",
            countryCode: "PT",
            address: "Porto, Portugal",
            lat: -8.61309,
            lng: 41.1412
        },
    },
    {
        _id: "10006549",
        name: "Studio 183",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606637481/houses/parisFour1_jxnu1d.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606637481/houses/parisFour2_xbfuyv.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606637481/houses/parisFour3_mla6tp.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606637481/houses/parisFour4_umhl7k.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606637481/houses/parisFour5_zvfav2.jpg"
        ],
        price: 65.00,
        type: 'Studio',
        summary: "Large studio with a modern and elegant decoration, perfect to spend a good day in Porto and ideal for exploring the city, it is quite well located. It is fully equipped with everything you need (including air conditioning!). Near the Trindade metro terminal, the Studio is 300 meters from Republic Square, one of the most iconic squares in the city's history. It is within walking distance of downtown Baixa and the cultural and commercial areas of the city.",
        capacity: 2,
        houseRules: {
            isPets: false,
            isSmoking: false
        },
        amenities: [
            "TV",
            "Kitchen",
            "Air Conditioner",
            "Fast food",
            "Parking",
            "Public Transport"
        ],
        host: {
            _id: "51399391",
            fullname: "Marius",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "Portugal",
            city: "Porto",
            countryCode: "PT",
            address: "Porto, Portugal",
            lat: -8.61309,
            lng: 40.1413
        },
        reviews: [
            {
                id: "madeId103",
                txt: "Very clean",
                rate: 4,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "/img/img3.jpg"
                }
            }
        ]
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
        type: 'Studio',
        summary: "This lovely two-bedroom apartment sleeping max 4 guests is located in the heart of Holland Park, just minutes away from multiple tube stations. The apartment has been recently refurbished in a modern style, featuring a fully equipped kitchen. It features comfortable furniture throughout the apartment.",
        capacity: 4,
        amenities: [
            "TV",
            "Wi-Fi",
            "Kitchen",
            "Air Conditioner",
            "Secured",
            "Parking",
            "Aid kit",
            "Public Transport"
        ],
        host: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "UK",
            city: "London",
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
                txt: "Very clean",
                rate: 3,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "Very clean",
                rate: 4,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "/img/img3.jpg"
                }
            }
        ],
        houseRules: {
            isPets: true,
            isSmoking: true
        },
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
        type: 'Shared apartment',
        summary: "Comfortable furniture throughout the apartment.",
        capacity: 5,
        amenities: [
            "Kitchen",
            "Air Conditioner",
            "Secured",
            "Fast food",
            "Parking",
            "Aid kit",
            "Public Transport"
        ],
        host: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "UK",
            city: "Manchester",
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
                txt: "Very clean",
                rate: 3,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "Very clean",
                rate: 4,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "/img/img3.jpg"
                }
            },
            {
                id: "madeId104",
                txt: "Very clean",
                rate: 5,
                by: {
                    _id: "u104",
                    fullname: "user4",
                    imgUrl: "/img/img4.jpg"
                }
            }
        ],
        houseRules: {
            isPets: true,
            isSmoking: true
        },
        likedByUserIds: [
            "u101",
            "u102",
            "u103"
        ]
    },
    {
        _id: "10004545",
        name: "Apartment in London",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635076/houses/tokyo1_z0qs7g.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635076/houses/tokyo3_yzlnmk.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635076/houses/tokyo4_xvihea.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635076/houses/tokyo2_ohfxlg.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635076/houses/tokyo5_an6j0x.jpg"
        ],
        price: 230.00,
        type: 'Shared apartment',
        summary: "Comfortable furniture throughout the apartment.",
        capacity: 2,
        amenities: [
            "TV",
            "Wi-Fi",
            "Kitchen",
            "Air Conditioner",
            "Secured",
            "Fast food",
            "Aid kit",
        ],
        host: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "UK",
            city: "Bermingham",
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
                txt: "Very clean",
                rate: 3,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
            {
                id: "madeId103",
                txt: "Very clean",
                rate: 4,
                by: {
                    _id: "u103",
                    fullname: "user3",
                    imgUrl: "/img/img3.jpg"
                }
            },
            {
                id: "madeId104",
                txt: "Very clean",
                rate: 5,
                by: {
                    _id: "u104",
                    fullname: "user4",
                    imgUrl: "/img/img4.jpg"
                }
            }
        ],
        houseRules: {
            isPets: true,
            isSmoking: true
        },
        likedByUserIds: [
            "u101",
            "u103"
        ]
    },
    {
        _id: "10006559",
        name: "A Studio in London",
        imgUrls: [
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635732/users/new-newyork1_h8khpy.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635732/users/new-newyork2_oa49ku.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635732/users/new-newyork3_odi6cn.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635732/users/new-newyork4_zxtxbv.jpg",
            "https://res.cloudinary.com/ariecloud/image/upload/v1606635732/users/new-newyork5_j8c4xy.jpg"
        ],
        price: 150.00,
        type: 'Apartment',
        summary: "Just minutes away from multiple tube stations. The apartment has been recently refurbished in a modern style, featuring a fully equipped kitchen. It features comfortable furniture throughout the apartment.",
        capacity: 2,
        amenities: [
            "TV",
            "Wi-Fi",
            "Fast food",
            "Parking",
            "Aid kit",
            "Public Transport"
        ],
        host: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
        },
        loc: {
            country: "UK",
            city: "Liverpool",
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
                txt: "Very clean",
                rate: 3,
                by: {
                    _id: "u102",
                    fullname: "user2",
                    imgUrl: "/img/img2.jpg"
                }
            },
        ],
        houseRules: {
            isPets: false,
            isSmoking: true
        },
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

// const i = await getById(10006547)
// console.log(i)

async function getById(id) {
    // const toy = axios.get(`${BASE_URL}/${toyId}`)
    // return toy.data
    // console.log('GOT:id', id)
    return await asyncStorage.getOne(KEY, id)
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