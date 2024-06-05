import invoices, {  invoiceById } from "./data/invoices";

//Variables
let firstname = 'Dovin';
const lastname = 'Hoyos';

//template literals
console.log(`Hola ${firstname} ${lastname}`);

//anonimous function
const sayHello = function(name){
    const greeting = `Hello ${name}!`;
    return greeting;
}
console.log(sayHello('Dovin'));

//arrow function
const add = (a, b) => a + b;
console.log(add(85, 21));

//objects
const invoice = {
    id: 1,
    name: 'office buys',
    date: new Date(),
    client: {
        id: 1,
        name: 'Dovin',
        lastname: 'Hoyos',
        age: 27
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
        {
            product: 'monitor',
            price: 550,
            quantity: 2
        }
    ],
    greeting: function(){
        return `Hola ${this.client.name}`;
    },
    total: function(){
         let total = 0;
         this.items.forEach(item => {
            total = total + item.price*item.quantity;
        });
        return total;
    }
};
//spread operator (...)
const invoice2 = {...invoice};
const result = invoice2 === invoice;
invoice2.id = 10;
console.log(result);

//optional chaining
console.log(invoice.company?.name);
if(invoice.company?.name){
    console.log('perfect')
}else{
    console.log('no hay company')
}

//operador ternario
const avarage = 1.5;

let stat = '';
stat = avarage >= 3.5 ? 'Aprobado' : 'Desaprobado';

console.log(`El estudiante fue: ${stat}`);

const a = 12;
const b = 8;
const c = 2;

let max;

max = a > b ? a : b;
max = max > c ? max : c;

console.log(`El numero mayor es: ${max}`);

//arrays
const vegetables = ['lechuga', 'silantro', 'brocoli', 'apio'];
vegetables.push('habichuelas', 'oyucos');

const fruits = ['mangos', 'manzanas', 'peras', 'bananos', 'papaya'];

const market = [...vegetables, ...fruits, 'arroz', 'lentejas'];

console.log(vegetables);
market.forEach(e => console.log(e));

//objects destructuring
const user = {
    username: 'dovin',
    email: 'dov@google.com',
    age: 25
}

const {username, email} = user;
console.log(`${username} con email: ${email}`);

//functions destructuring
const details = ( {username, age} ) => {
    console.log(`El usuario ${username}, tiene ${age} años`);
}
details(user);

//arrays destructuring
const users = ['ler', 'ran', 'toin', 'lalme'];
const[ler, ran, ...r] = users;
console.log(ler, ran, ...r);

//arrays methods, map
const invoiceName = invoices.map( i => {return i.name});
console.log(invoiceName);

//find method
console.log('Search invoice by id: ')
console.log(invoiceById(5));

// filter method
const invoiceFilter = invoices.filter( i => i.id > 1);
console.log(invoiceFilter);

const invoiceDel = invoices.filter( i => i.id !== 2);
console.log(invoiceDel);

// some method
const invoiceSome = invoices.some( i => i.id === 5);
console.log(invoiceSome);