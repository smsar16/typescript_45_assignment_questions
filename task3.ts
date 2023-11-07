let str : string = "Faisal raZa KhaN";
let L_case : string = str.toLowerCase();
let U_case : string = str.toUpperCase();
function T_case(input:string): string {
    return input
        .toLowerCase()
        .split(" ")
        .map((word)=> word.charAt(0).toUpperCase()+word.slice(1))
        .join(" ");
}
console.log('Lower Case: '+L_case);
console.log('Upper Case: '+U_case);
console.log(T_case(str));