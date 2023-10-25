const promiseNotes = new Promise(function(resolve, reject){
    console.log('Promise is pending state');
    const isNotesPrepared = false;   //true
    if (isNotesPrepared) {
        resolve('Notes is prepared and here is the notes guys...') 
    }else{
        reject("Sorry guys, I didn't get time, Please prepare notes your self");
    }
})
promiseNotes.then( function(success){
    console.log(`========= then() ============`);
    console.log(success);
    console.log('Thank you....');
}).catch(function(failure){
    console.log(`========= catch() ============`);
    console.log(failure);
    console.log(`Are yar.... `);
}).finally(function(){
    console.log(`========= finally block ============`);
    console.log('I must have notes... ');
    console.log("05_conversion.js In case Sir won't share it, will prepare my self");
})