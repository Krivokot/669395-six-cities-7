const testOffers = [
    {
        city: {
            name: 'Paris',
            location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
            }
        },
        preview_image: 'https://7.react.pages.academy/static/hotel/13.jpg',
        images: [
            'https://7.react.pages.academy/static/hotel/16.jpg',
            'https://7.react.pages.academy/static/hotel/19.jpg',
            'https://7.react.pages.academy/static/hotel/20.jpg',
            'https://7.react.pages.academy/static/hotel/2.jpg',
            'https://7.react.pages.academy/static/hotel/12.jpg',
            'https://7.react.pages.academy/static/hotel/13.jpg',
            'https://7.react.pages.academy/static/hotel/5.jpg',
            'https://7.react.pages.academy/static/hotel/1.jpg',
            'https://7.react.pages.academy/static/hotel/15.jpg',
            'https://7.react.pages.academy/static/hotel/3.jpg',
            'https://7.react.pages.academy/static/hotel/7.jpg',
            'https://7.react.pages.academy/static/hotel/14.jpg',
            'https://7.react.pages.academy/static/hotel/11.jpg',
            'https://7.react.pages.academy/static/hotel/18.jpg'
        ],
        title: 'Tile House',
        is_favorite: false,
        is_premium: false,
        rating: 4.2,
        type: 'house',
        bedrooms: 3,
        max_adults: 3,
        price: 812,
        goods: [
            'Coffee machine',
            'Fridge',
            'Baby seat',
            'Washing machine',
            'Towels',
            'Laptop friendly workspace',
            'Air conditioning',
            'Dishwasher',
            'Breakfast',
            'Washer'
        ],
        host: {
            id: 25,
            name: 'Angelina',
            is_pro: true,
            avatar_url: 'img/avatar-angelina.jpg'
        },
        description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
        location: {
            latitude: 48.87861,
            longitude: 2.357499,
            zoom: 16
        },
        id: 1
    },
    {
        city: {
            name: 'Paris',
            location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
            }
        },
        preview_image: 'https://7.react.pages.academy/static/hotel/10.jpg',
        images: [
            'https://7.react.pages.academy/static/hotel/17.jpg',
            'https://7.react.pages.academy/static/hotel/11.jpg',
            'https://7.react.pages.academy/static/hotel/7.jpg',
            'https://7.react.pages.academy/static/hotel/18.jpg',
            'https://7.react.pages.academy/static/hotel/8.jpg',
            'https://7.react.pages.academy/static/hotel/2.jpg',
            'https://7.react.pages.academy/static/hotel/3.jpg',
            'https://7.react.pages.academy/static/hotel/13.jpg',
            'https://7.react.pages.academy/static/hotel/12.jpg',
            'https://7.react.pages.academy/static/hotel/4.jpg',
            'https://7.react.pages.academy/static/hotel/19.jpg',
            'https://7.react.pages.academy/static/hotel/14.jpg',
            'https://7.react.pages.academy/static/hotel/10.jpg',
            'https://7.react.pages.academy/static/hotel/15.jpg'
        ],
        title: 'The Pondhouse - A Magical Place',
        is_favorite: false,
        is_premium: false,
        rating: 3,
        type: 'house',
        bedrooms: 3,
        max_adults: 8,
        price: 901,
        goods: [
            'Baby seat',
            'Breakfast',
            'Towels',
            'Laptop friendly workspace',
            'Washer',
            'Air conditioning'
        ],
        host: {
            id: 25,
            name: 'Angelina',
            is_pro: true,
            avatar_url: 'img/avatar-angelina.jpg'
        },
        description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
        location: {
            latitude: 48.834610000000005,
            longitude: 2.335499,
            zoom: 16
        },
        id: 5
    },
]
const testCity = {
    location: {
        latitude: 48.864716,
        longitude: 2.349014
    },
    name: 'Paris'
}
const testSortType = 'Popular'

const testDetails = {

    city: {
        name: 'Paris',
        location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
        }
    },
    preview_image: 'https://7.react.pages.academy/static/hotel/13.jpg',
    images: [
        'https://7.react.pages.academy/static/hotel/16.jpg',
        'https://7.react.pages.academy/static/hotel/19.jpg',
        'https://7.react.pages.academy/static/hotel/20.jpg',
        'https://7.react.pages.academy/static/hotel/2.jpg',
        'https://7.react.pages.academy/static/hotel/12.jpg',
        'https://7.react.pages.academy/static/hotel/13.jpg',
        'https://7.react.pages.academy/static/hotel/5.jpg',
        'https://7.react.pages.academy/static/hotel/1.jpg',
        'https://7.react.pages.academy/static/hotel/15.jpg',
        'https://7.react.pages.academy/static/hotel/3.jpg',
        'https://7.react.pages.academy/static/hotel/7.jpg',
        'https://7.react.pages.academy/static/hotel/14.jpg',
        'https://7.react.pages.academy/static/hotel/11.jpg',
        'https://7.react.pages.academy/static/hotel/18.jpg'
    ],
    title: 'Tile House',
    is_favorite: false,
    is_premium: false,
    rating: 4.2,
    type: 'house',
    bedrooms: 3,
    max_adults: 3,
    price: 812,
    goods: [
        'Coffee machine',
        'Fridge',
        'Baby seat',
        'Washing machine',
        'Towels',
        'Laptop friendly workspace',
        'Air conditioning',
        'Dishwasher',
        'Breakfast',
        'Washer'
    ],
    host: {
        id: 25,
        name: 'Angelina',
        is_pro: true,
        avatar_url: 'img/avatar-angelina.jpg'
    },
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    location: {
        latitude: 48.87861,
        longitude: 2.357499,
        zoom: 16
    },
    id: 1

}
const testFavorites = [
    {

        city: {
            name: 'Paris',
            location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
            }
        },
        preview_image: 'https://7.react.pages.academy/static/hotel/13.jpg',
        images: [
            'https://7.react.pages.academy/static/hotel/16.jpg',
            'https://7.react.pages.academy/static/hotel/19.jpg',
            'https://7.react.pages.academy/static/hotel/20.jpg',
            'https://7.react.pages.academy/static/hotel/2.jpg',
            'https://7.react.pages.academy/static/hotel/12.jpg',
            'https://7.react.pages.academy/static/hotel/13.jpg',
            'https://7.react.pages.academy/static/hotel/5.jpg',
            'https://7.react.pages.academy/static/hotel/1.jpg',
            'https://7.react.pages.academy/static/hotel/15.jpg',
            'https://7.react.pages.academy/static/hotel/3.jpg',
            'https://7.react.pages.academy/static/hotel/7.jpg',
            'https://7.react.pages.academy/static/hotel/14.jpg',
            'https://7.react.pages.academy/static/hotel/11.jpg',
            'https://7.react.pages.academy/static/hotel/18.jpg'
        ],
        title: 'Tile House',
        is_favorite: false,
        is_premium: false,
        rating: 4.2,
        type: 'house',
        bedrooms: 3,
        max_adults: 3,
        price: 812,
        goods: [
            'Coffee machine',
            'Fridge',
            'Baby seat',
            'Washing machine',
            'Towels',
            'Laptop friendly workspace',
            'Air conditioning',
            'Dishwasher',
            'Breakfast',
            'Washer'
        ],
        host: {
            id: 25,
            name: 'Angelina',
            is_pro: true,
            avatar_url: 'img/avatar-angelina.jpg'
        },
        description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
        location: {
            latitude: 48.87861,
            longitude: 2.357499,
            zoom: 16
        },
        id: 1

    }

]
const testNearBy = [
    {

        city: {
            name: 'Paris',
            location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
            }
        },
        preview_image: 'https://7.react.pages.academy/static/hotel/13.jpg',
        images: [
            'https://7.react.pages.academy/static/hotel/16.jpg',
            'https://7.react.pages.academy/static/hotel/19.jpg',
            'https://7.react.pages.academy/static/hotel/20.jpg',
            'https://7.react.pages.academy/static/hotel/2.jpg',
            'https://7.react.pages.academy/static/hotel/12.jpg',
            'https://7.react.pages.academy/static/hotel/13.jpg',
            'https://7.react.pages.academy/static/hotel/5.jpg',
            'https://7.react.pages.academy/static/hotel/1.jpg',
            'https://7.react.pages.academy/static/hotel/15.jpg',
            'https://7.react.pages.academy/static/hotel/3.jpg',
            'https://7.react.pages.academy/static/hotel/7.jpg',
            'https://7.react.pages.academy/static/hotel/14.jpg',
            'https://7.react.pages.academy/static/hotel/11.jpg',
            'https://7.react.pages.academy/static/hotel/18.jpg'
        ],
        title: 'Tile House',
        is_favorite: false,
        is_premium: false,
        rating: 4.2,
        type: 'house',
        bedrooms: 3,
        max_adults: 3,
        price: 812,
        goods: [
            'Coffee machine',
            'Fridge',
            'Baby seat',
            'Washing machine',
            'Towels',
            'Laptop friendly workspace',
            'Air conditioning',
            'Dishwasher',
            'Breakfast',
            'Washer'
        ],
        host: {
            id: 25,
            name: 'Angelina',
            is_pro: true,
            avatar_url: 'img/avatar-angelina.jpg'
        },
        description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
        location: {
            latitude: 48.87861,
            longitude: 2.357499,
            zoom: 16
        },
        id: 1

    },
    {

        city: {
            name: 'Paris',
            location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
            }
        },
        preview_image: 'https://7.react.pages.academy/static/hotel/13.jpg',
        images: [
            'https://7.react.pages.academy/static/hotel/16.jpg',
            'https://7.react.pages.academy/static/hotel/19.jpg',
            'https://7.react.pages.academy/static/hotel/20.jpg',
            'https://7.react.pages.academy/static/hotel/2.jpg',
            'https://7.react.pages.academy/static/hotel/12.jpg',
            'https://7.react.pages.academy/static/hotel/13.jpg',
            'https://7.react.pages.academy/static/hotel/5.jpg',
            'https://7.react.pages.academy/static/hotel/1.jpg',
            'https://7.react.pages.academy/static/hotel/15.jpg',
            'https://7.react.pages.academy/static/hotel/3.jpg',
            'https://7.react.pages.academy/static/hotel/7.jpg',
            'https://7.react.pages.academy/static/hotel/14.jpg',
            'https://7.react.pages.academy/static/hotel/11.jpg',
            'https://7.react.pages.academy/static/hotel/18.jpg'
        ],
        title: 'Tile House',
        is_favorite: false,
        is_premium: false,
        rating: 4.2,
        type: 'house',
        bedrooms: 3,
        max_adults: 3,
        price: 812,
        goods: [
            'Coffee machine',
            'Fridge',
            'Baby seat',
            'Washing machine',
            'Towels',
            'Laptop friendly workspace',
            'Air conditioning',
            'Dishwasher',
            'Breakfast',
            'Washer'
        ],
        host: {
            id: 25,
            name: 'Angelina',
            is_pro: true,
            avatar_url: 'img/avatar-angelina.jpg'
        },
        description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
        location: {
            latitude: 48.87861,
            longitude: 2.357499,
            zoom: 16
        },
        id: 1

    },
    {

        city: {
            name: 'Paris',
            location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
            }
        },
        preview_image: 'https://7.react.pages.academy/static/hotel/13.jpg',
        images: [
            'https://7.react.pages.academy/static/hotel/16.jpg',
            'https://7.react.pages.academy/static/hotel/19.jpg',
            'https://7.react.pages.academy/static/hotel/20.jpg',
            'https://7.react.pages.academy/static/hotel/2.jpg',
            'https://7.react.pages.academy/static/hotel/12.jpg',
            'https://7.react.pages.academy/static/hotel/13.jpg',
            'https://7.react.pages.academy/static/hotel/5.jpg',
            'https://7.react.pages.academy/static/hotel/1.jpg',
            'https://7.react.pages.academy/static/hotel/15.jpg',
            'https://7.react.pages.academy/static/hotel/3.jpg',
            'https://7.react.pages.academy/static/hotel/7.jpg',
            'https://7.react.pages.academy/static/hotel/14.jpg',
            'https://7.react.pages.academy/static/hotel/11.jpg',
            'https://7.react.pages.academy/static/hotel/18.jpg'
        ],
        title: 'Tile House',
        is_favorite: false,
        is_premium: false,
        rating: 4.2,
        type: 'house',
        bedrooms: 3,
        max_adults: 3,
        price: 812,
        goods: [
            'Coffee machine',
            'Fridge',
            'Baby seat',
            'Washing machine',
            'Towels',
            'Laptop friendly workspace',
            'Air conditioning',
            'Dishwasher',
            'Breakfast',
            'Washer'
        ],
        host: {
            id: 25,
            name: 'Angelina',
            is_pro: true,
            avatar_url: 'img/avatar-angelina.jpg'
        },
        description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
        location: {
            latitude: 48.87861,
            longitude: 2.357499,
            zoom: 16
        },
        id: 1

    },
]
const testAuthInfo = {
    id: 1,
    email: '123@yandex.ru',
    name: '123',
    avatar_url: 'https://7.react.pages.academy/static/avatar/3.jpg',
    is_pro: false,
    token: 'MTIzQHlhbmRleC5ydQ=='
}
const testReviews = [
    {
        id: 1,
        user: {
            id: 12,
            is_pro: true,
            name: 'Isaac',
            avatar_url: 'https://7.react.pages.academy/static/avatar/3.jpg'
        },
        rating: 4,
        comment: 'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.',
        date: '2021-07-18T08:50:43.820Z'
    }
]

export {testAuthInfo, testSortType, testReviews, testOffers, testNearBy, testFavorites, testDetails, testCity}