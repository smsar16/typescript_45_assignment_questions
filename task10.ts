//Comments // The program takes in a name and displays the simple sentence with the name
//Program constructed on 10-07-2023 

const name__:string = "Tariq";
console.log('Hello ' + name__ + ', would you like to join us for tea?');


//The program takes in a string and convert it into lowercase, uppercase and titlecase

let str_ : string = "Every night in My DreamS";
let L__case : string = str_.toLowerCase();
let U__case : string = str_.toUpperCase();
function T__case(input:string): string {
    return input
        .toLowerCase()
        .split(" ")
        .map((word)=> word.charAt(0).toUpperCase()+word.slice(1))
        .join(" ");
}
console.log('Lower Case: '+L__case);
console.log('Upper Case: '+U__case);
console.log(`Title Case: ${T__case(str_)}`);