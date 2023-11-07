// 5 places and print in different orders


import promptSync from 'prompt-sync';

const in_put = promptSync();
const places: string[] = [];

for (let i = 0; i < 4; i++) {
  const place = in_put(`Enter place # ${i+1} you would like to visit: `);
  places.push(place);
}

console.log("Places you would like to visit:");
console.log(places);

//const alpha=...places.sort()
console.log(`\n The list in alphabetical order is: `)
console.log([...places].sort())

console.log(`\n The list in original order is: `)
console.log(places)

console.log(`\n The list in reverse alphabetical order is: `)
console.log([...places].sort().reverse())

console.log(`\n The list in original order is: `)
console.log(places)

console.log(`\n The list in reverse of the original order is: `)
console.log(places.reverse())

console.log(`\n The list in the original order again is: `)
console.log(places.reverse())

console.log(`\n The list in the alphabetical order is: `)
console.log(places.sort())

console.log(`\n The list in the reverse alphabetical order is: `)
console.log(places.reverse())