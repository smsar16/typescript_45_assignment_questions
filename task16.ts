/* You found a bigger table
Add 3 more guests
in the beginning
in the middle
at the end*/


import * as readline from 'readline';

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const guestNames : string[] = [];
const three_new_guests : string[] = [];


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
            console.log("Excuse me Sir! It has just been informed that the bigger dinner table you ordered will be delivered today. \nyou may invite three more guests");
            
            r1.question("Do you want to invite three more guests? ", (reply : string)=>{
                if(reply.toLowerCase()==='yes'){
                    invite_three_more();
                } else {
                    r1.close();
                }
            })
        } else {
            r1.close();
        }
    });
    
}

function invite_three_more(){
    let i=0;

    const invite_next =() =>{
    if (i<3){
            r1.question(`Enter name number ${i+1}: `, (add3:string)=>{
            three_new_guests.push(add3);
            i++;
            invite_next();})
    }else{
        r1.close();
        new_list();
    }
    } 
    invite_next();

}

function new_list(){
    // for (i=0; i<3; i++){
    //     const name_(i):string = new_list[i];

    // }
    guestNames.splice(0,0,three_new_guests[0]); // initial position
    
    const middle:number = Math.round(guestNames.length/2);
    
    guestNames.splice(middle,0,three_new_guests[1]); // middle position

    guestNames.push(three_new_guests[2]); // end position

    console.log("final list is as following:\n")
    for (const name of guestNames){
        console.log(name);
    }
    console.log("New invites are being sent again\n")
    for (const name of guestNames){
        console.log(`Mr. ${name}, you are cordially invited to dinner on this weekend. Hope to welcome you.\n`)}

   

    
}



type_guest_name();
