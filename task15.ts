/* One of the geusts can't make it to dinner. 
modify the list
Replace the name with a new person
Print a second set of invites*/


import * as readline from 'readline';

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const guestNames : string[] = [];


function type_guest_name (){
    r1.question("Enter guest's name or type 'END': ", (name:string) => {
        if(name.toLowerCase() === 'end') {
            // r1.close();
            show_guest_list();
        } 
        else 
        {
            guestNames.push(name);
            type_guest_name();
        }
    });
    
}



function show_guest_list(){
    console.log('Following guests are invited: ');
    for (const name of guestNames){
        console.log(name)
    }
    const random_select = Math.floor(Math.random()*(guestNames.length));

    const absent = guestNames.splice(random_select,1)[0];

    console.log(`Excuse me Sir, Mr. ${absent} cannot join you for dinner. He sends his apologies.`);

    r1.question("Enter the new guest's name: ", (new_name:string)=> {
        guestNames.push(new_name);
        console.log("Updated guest list is: ");
        for (const name of guestNames){
            console.log(name);
        }
        // r1.close();
        send_invites();
    })
}

function send_invites(){
    r1.question("Do you want to send invites again?", (order:string) =>{
        if(order.toLowerCase() === 'yes'){
            for (const name of guestNames){
                console.log(`Mr. ${name}, you are cordially invited to dinner on this weekend. Hope to welcome you.`)
            }
        } else {
            r1.close();
        }
    });
    
}
type_guest_name();
