function welcomeMessage(name, greetHandler){
    //console.log(greetHandler);
    greetHandler(name);
}
// const name = ['Tom Hanks', 'Tom cruise', 'Tom Brady'];
//const myObj = {name:'Tom Cinku', age: 11}
function greetMorning(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name);
}


function greetAfternoon(name){
    console.log('Good Afternoon', name);
}
welcomeMessage('Tom Hanks',greetMorning);
welcomeMessage('Sakib Hanks',greetAfternoon);
welcomeMessage('Bappa Raj',greetEvening);


