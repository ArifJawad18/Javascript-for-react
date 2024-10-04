//1.let
const fatherName = "Arnold";
let season = "rainy";
season = "winter";

//2. template string, arrow function, spread operator //

const newNumber = [number];

numbers.push(99);
number.push(99);
number.push(99);

console.log(newNumber);

//3.Array methods  map, forEach, filter and find
const products = [
  { name: "camera", price: 9000, brand: "canon", color: "silver" },
  { name: "laptop", price: 70000, brand: "dell", color: "black" },
  { name: "phone", price: 66000, brand: "vivo", color: "gray" },
];
const brand = products.map((product) => products);

const brands = products.map((product) => product.brand);

// 1.array destructuring
const numbers = [42, 65];
const x = numbers[0];
const y = numbers[1];

console.log(x, y);

// 4. Array and object Destructuring //
const student = {
  name: "Sakib",
  age: 32,
  movies: ["woods", "city"],
};
const [firstMovie, secondMovie] = student.movies;

// 5. JSON, Fetch, keys, values, array add or remove using dots
const person = {
  name: "Sakib",
  age: 32,
  Home: ["UK", "City"],
};
const studentJSON = JSON.stringify(student);

// fetch
fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));

// 6. (advanced) truthy, falsy, Ternary operator, shortcut and or
const isActive =true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');

isActive && showUser();

// 7. Explore Local storage and session storage with JSON



// 8. dot vs bracket notation //
const persons = {
  name:'doy',
  profession:'Traffic Surgeon',
  age:39,
  25: 'Summer',
  add:'Dhaka'
}
// dot notation
const prof1 = person.profession;
