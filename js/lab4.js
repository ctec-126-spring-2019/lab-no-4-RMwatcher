// lab4.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1(){
    let output = '';
    output = 'You are a brick tied to me that\'s dragging me down <br>Strike a match and I\'ll burn you to the ground <br>We are the jack-o-lanterns in July setting fire to the sky <br>Here, here comes this rising tide, so come on';

    return output;
}

function verse2(){
    let output = '';
    output = 'Cross walks and crossed hearts and hope-to-dies<br> Silver clouds with grey linings';

    return output;
}

function verse3(){
    let output = '';
    output ='Bring home the boys and scrap scrap metal the tanks<br> Get hitched, make a career out of robbing banks<br> Because the world is just a teller and we are wearing black masks<br> "You broke our spirit," says the note we pass';

    return output;
}

function chorus1(){
    let output = '';
    output = 'Put on your war paint';

    return output;
}

function chorus2(){
    let output = '';
    output = 'So we can take the world back from a heart attack<br> One maniac at a time we will take it back<br> You know time crawls on when you\'re waiting for the song to start<br> So dance alone to the beat of your heart';

    return output;
}

function chorus3(){
    let output = '';
    output = 'Hey young blood, doesn\'t it feel like our time is running out?<br> I\'m gonna change you like a remix<br> Then I\'ll raise you like a phoenix<br> Wearing our vintage misery<br> No, I think it looked a little better on me<br> I\'m gonna change you like a remix<br> Then I\'ll raise you like a phoenix';

    return output;
}

function chorus3_2(){
    let output = '';
    output = 'Hey young blood, doesn\'t it feel like our time is running out?<br> I\'m gonna change you like a remix<br> Then I\'ll raise you like a phoenix';

    return output;
}

function chorus4(){
    let output = '';
    output = 'The war is won, before it\'s begun<br> Release the doves, surrender love';

    return output;
}

function chorus4_2(){
    let output = '';
    output = 'The war is won, before it\'s begun (Wave the white flag!)<br> Release the doves, surrender love (Wave the white flag!)';

    return output;
}


function main(){
    let finalOutput = ''; // used to build lyrics string
    finalOutput = `<h2>Phoenix by Fall Out Boy</h2><br>
                   <p>${chorus1()}</p> 
                   <p>${verse1()}</p> 
                   <p>${chorus1()}</p> 
                   <p>${verse2()}</p> 
                   <p>${chorus2()}</p> 
                   <p>${chorus3()}</p> 
                   <p>${verse3()}</p> 
                   <p>${chorus2()}</p> 
                   <p>${chorus3()}</p> 
                   <p>${chorus1()}</p> 
                   <p>${chorus4()}</p> 
                   <p>${chorus4()}</p> 
                   <p>${chorus4()}</p> 
                   <p>${chorus4_2()}</p> 
                   <p>${chorus3()}</p> 
                   <p>${chorus3_2()}</p> 
                   <p>${chorus1()}</p>`;
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
}

window.onload = function(){
    main();
}