const person_name : string = "Nawab \nPataudi \tAli \nKhan";
console.log(person_name);
const Trimmed_Name: string = person_name.replace(/\s/g," ");

console.log('The name without whitespace is: '+Trimmed_Name);