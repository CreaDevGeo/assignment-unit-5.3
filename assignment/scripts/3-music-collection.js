// Building a music collection program
console.log('***** Music Collection *****')

// - VARIABLE -
// Albums collection. All albums going into this array
let collection = [];

// - FUNCTIONS -
// Function to add an album to the collection
function addToCollection (title, artist, yearPublished){
    console.log("Running addToCollection.");
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    } // end declaration of album object literal with input parameters
    collection.push(album);
    console.log("Album added:", album);
    return true;
} // end addToCollection. Adding object to collection array.

function findByArtist(artist){
console.log("Running findByArtist.");
    for(i = 0; i < collection.length; i ++){
        if (collection[i].artist === artist) {
            console.log(`The artist "${artist}" is in this collection!`);
            return true;
        } 
    }
    console.log(`The artist ${artist} is unfortunately, not in this collection.`);
    return false;
} // end conditional, artist searched

// Function to search for album in a collection and output artist and year published
function search (albumToSearch){
console.log("Actively running search.")
for(let album of collection)
if(album === albumToSearch){
console.log("Yes!");
return true;
}
}

// Function to show albums in a collection
function showCollection(collectionToShow){
    let albumString = [];
    console.log("Within this collection, there are", collectionToShow.length, "albums.");
    for(i = 0; i < collectionToShow.length; i ++){
    albumString.push(`${collectionToShow[i].title} by ${collectionToShow[i].artist}, published in ${collectionToShow[i].yearPublished}`); 
    } // end show title, artist, publish date
    console.log(albumString);
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
console.log(addToCollection("Hold the Anchovies", "We Fish Flounders", 2047));
console.log(addToCollection("Lost in the Backrooms", "Liminal Space", 2021));
console.log(collection);
console.log("*** - END addToCollection FUNCTION TESTING - ***");
// - End addToCollection Function Testing -

// - showCollection Function Testing -
console.log("*** - showCollection FUNCTION TESTING - ***");
console.log(showCollection(collection));
console.log(collection);
// - End showCollection Function Testing -

// - findByArtist Function Testing -
console.log("*** - findByArtist FUNCTION TESTING - ***");
console.log(findByArtist("Pewee Babies"));
console.log(findByArtist("We Fish Flounders"));
console.log(findByArtist("Liminal Space"));
console.log(findByArtist("Nine Lives"));
console.log(collection);
// - End findByArtist Function Testing -

// - search Function Testing -
console.log("*** - search FUNCTION TESTING - ***");
console.log(seach("Fairy Tales"));
// - End search Function Testing -