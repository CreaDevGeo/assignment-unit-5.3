// Building a music collection program
console.log('***** Music Collection *****')

// - VARIABLE -
// Albums collection. All albums going into this array
let collection = [];

// - FUNCTIONS -
// Function to add an album to the collection
function addToCollection (title, artist, yearPublished){
    console.log("You are now running addToCollection.");
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    } // end declaration of album object literal with input parameters
    collection.push(album);
    return album;
} // end addToCollection. Adding object to collection array.

function findArtist(collectionToAdd){

}

// Function to show albums in a collection
function showCollection(collectionToShow){
    console.log("Within this collection, there are", collectionToShow.length, "albums.");
    for(i = 0; i < collectionToShow.length; i ++){
        collectionToShow[i] = `${collectionToShow[i].title} by ${collectionToShow[i].artist}, published in ${collectionToShow[i].yearPublished}`
    } // end show title, artist, publish date
    console.log(collectionToShow);
    return true;
} // end showCollection function
// - END FUNCTIONS -

// - TESTING SECTION -
console.log("*** - TESTING - ***");
// - addToCollectionc Function Testing -
console.log("*** - addToCollection FUNCTION TESTING - ***");
console.log(addToCollection("Sugar Rush", "Pewee Babies", 2025));
console.log(addToCollection("Brainwashed in Zombie Juice", "Apocalypse Rockers", 2132));
console.log(addToCollection("Not So Curable", "Apocalypse Rockers", 2165));
console.log(addToCollection("Fairy Tales", "Pewee Babies", 2028));
console.log(addToCollection("Hold the Artichoke", "We Fish Flounders", 2047));
console.log(addToCollection("Lost in the Backrooms", "Liminal Space", 2021));
console.log(collection);
console.log("*** - END addToCollection FUNCTION TESTING - ***");
// - End addToCollection Function Testing -

// - showCollection Function Testing -
console.log("*** - showCollection FUNCTION TESTING - ***");
console.log(showCollection(collection));
// - End showCollection Function Testing -
