const cookBeanSouffle = require('./practiceLibrary.js');

//Einleitung einer asynchronen Funktion
async function hostDinnerParty() {
    //try "probiert" den Code der normalerweise im function body alleine steht aus
    try {
        let dinner = await cookBeanSouffle() //await keyword pausiert folgenden code im block bis das erwartete Promise resolved oder rejected ist
        console.log(`${dinner} is served!`)
        console.log(dinner + " is served");
    }
    //sollte der Codeblock vom try fehlschlagen wird der catch Block ausgeführt
    catch (error) {
        console.log(error)
        console.log("Ordering a pizza!")
    };
}
hostDinnerParty()