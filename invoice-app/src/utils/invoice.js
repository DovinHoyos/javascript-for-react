
export const invoice = {
    id: 1,
    name: 'PC Components',
    client: {
        name: 'Dylan',
        lastname: 'Hoyos',
        email: 'dovin@correo.com',
        address: {
            country: 'Colombia',
            city: 'Popayan',
            street: '73',
            number: '13 - 89'
        }

    },
    items: [
        {
            id: 1,
            product: 'pc gamer',
            price: 1200,
            quantity: 1
        },
        {
            id: 2,
            product: 'Asus screen 24"',
            price: 800,
            quantity: 1
        },
        {
            id: 3,
            product: 'gamer periferics',
            price: 550,
            quantity: 1
        }
    ]
}