import { log } from 'console';
import * as readline from 'readline';

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const guest_name: string[] = [];

function Enter_Guest_Name(){
    r1.question('Enter guest name or type "finish" to finish: ', (gname : string) => {
        if (gname.toLowerCase() === "finish"){
            r1.close();
            show_guest_name();}
        else {
            guest_name.push(gname);
            Enter_Guest_Name();
        }
    });
    
}
const message:string = 'You are cordially invited to dinner on this weekend. Hope to welcome you.';

function show_guest_name(){
    for  (const gname of guest_name){

    console.log(`Mr. ${gname} ${message}`)}
}


Enter_Guest_Name();