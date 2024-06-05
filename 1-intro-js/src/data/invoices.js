
const invoices = [
    {
        id: 1,
        name: 'office buys',
        client: {
            name: 'Dovin',
            lastname: 'Hoyos',
        },
        items: [
            {
                product: 'teclado',
                price: 200,
                quantity: 1
            },
            {
                product: 'mouse',
                price: 120,
                quantity: 1
            },
        ]
    },
    {
        id: 2,
        name: 'paper buys',
        client: {
            name: 'Ler',
            lastname: 'Hoyos',
        },
        items: [
            {
                product: 'papper',
                price: 25,
                quantity: 3
            },
            {
                product: 'pencils',
                price: 2,
                quantity: 10
            },
            {
                product: 'books',
                price: 80,
                quantity: 2
            }
        ]
    },
    {
        id: 3,
        name: 'tech buys',
        client: {
            name: 'Viejo',
            lastname: 'San',
        },
        items: [
            {
                product: 'cpu intel',
                price: 1000,
                quantity: 1
            },
            {
                product: 'mouse gamer',
                price: 120,
                quantity: 1
            },
            {
                product: 'screen 20',
                price: 900,
                quantity: 1
            }
        ]
    }
];

const invoiceById = (id) => {
    return invoices.find( i => i.id === id);
}

//promises
const findInvoiceById = (id) => {
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            const result = invoiceById(id);
            if(result){
                resolve(result);
            }else{reject('error: no se encontro ninguna factura con ese id')}
        }, 2500);
    })

    return promise;
}

export{
    invoices as default,
    invoiceById,
    findInvoiceById
}