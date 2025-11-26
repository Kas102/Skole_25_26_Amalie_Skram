//for loop = repeat some code a limited amount of times

// ++ Teller en oppover +=2 teller to oppover osv.
// -- Teller en nedover -=2 teller to nedover osv.

//for(let i = 0; i <= 10; i++){

//    if(i == 6){
//        continue;       //continue; fortsetter uten og skrive verdien!
//        break;          //break; stopper opp tallet og alt som kommer etter!
//    }
//    else{
//     console.log(i);
//    }
//}

//  While loop = repeat some code WHILE some condition is true

//let username = "";

//while(username === ""){
//    username = window.prompt('Enter your username!');
//}

//console.log(`Velkommen ${username}`);

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Skriv ditt brukernavn`);
    password = window.prompt(`Skriv ditt passord!`);

    if(username === "mimimi" && password === "hihihiha"){
        loggedIn = true;
        console.log("Du er logget inn!");
    }
    else{
        console.log("Feil logg inn, se om du har brukt rett brukernavn og passord");
    }
}