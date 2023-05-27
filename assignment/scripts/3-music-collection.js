// Building a music collection program
console.log('***** Music Collection *****')

// - VARIABLES -
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
        // searching for artist
        if (collection[i].artist === artist) {
            console.log(`The artist "${artist}" is in this collection!`);
            return true;
        } // end found artist
    }
    console.log(`The artist ${artist} is unfortunately, not in this collection.`);
    return false;
} // end conditional, artist searched

// Function to search for album in a collection and output artist and year published
    //  Add statements and code to search for track name or a song duration that's more or less than a certain time.
function search (albumTitle){
let noAlbumFound = [];
console.log("Actively running search.")
// album found conditional
    for(i = 0; i < collection.length; i ++){
        if(collection[i].title === albumTitle){
        console.log(`The album that you searched, "${albumTitle}", was made by ${collection[i].artist}, and published in ${collection[i].yearPublished}`);
        console.log(collection[i]);
        return true;
} // end found album
} // end loop
// album not found conditional
if(collection[i] != albumTitle ){
    console.log("Sorry this album cannot be found.")
    console.log(noAlbumFound);
    return false;
} // end album not found
// no albums
console.log("No albums searched.");
return collection;
} //end no albums found and search function

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

// Function adding a new track to an album
function addTrack(artistName, albumTitle, trackName, trackDuration) {
    let track = [trackName, trackDuration];
    console.log(`Running addTrack. Please enter "artist name", "album title", "track name", and "track duration".`);
  
    // Adding tracks as property to albums in collection
    for (i = 0; i < collection.length; i++) {
      if (collection[i].artist === artistName && collection[i].title === albumTitle){
        collection[i].tracks = [trackName, trackDuration];
        console.log(`You successfully added the song, ${trackName} to the album, ${albumTitle}!`);
        return true;
      } // end album to add track to
    } // end all albums loop
    // If any parameter is missing
    if (artistName === undefined || albumTitle === undefined || trackDuration === undefined || trackName === undefined){
      console.log("Sorry, you may have missed a parameter. Please try again.");
      return false;
    }
    // If the artist to add the track to doesn't exist in the collection
    if (collection[i].artist !== artistName) {
      console.log(`Cannot add song. The artist "${artistName}" is not in this collection.`);
      return false;
    } // end artist not in collection
    console.log(`Cannot add song. The album "${albumTitle}" is not in this collection.`);
    return false;
    // end album not in collection
  } // end addTrack function

// - END FUNCTIONS -

// - TESTING SECTION -
console.log("*** - TESTING - ***");
// - addToCollectionc Function Testing -
console.log("*** - addToCollection FUNCTION TESTING - ***"); // adding albums to collection
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
console.log(findByArtist("Pewee Babies")); // expect found
console.log(findByArtist("We Fish Flounders")); // expect found
console.log(findByArtist("Liminal Space")); //expect found
console.log(findByArtist("Nine Lives")); // expect not found
console.log(collection);
// - End findByArtist Function Testing -

// - search Function Testing -
console.log("*** - search FUNCTION TESTING - ***");
console.log(search("Fairy Tales")); //expect found, so first conditional
console.log(search("Not So Curable")); // expect found, so first conditional
console.log(search("Super 8")); // expect not found, so second conditional
console.log(search()); // expect no albums searched
// - End search Function Testing -

// - addTrack Function Testing -
console.log("*** - addTrack FUNCTION TESTING - ***");
console.log(showCollection(collection));
// console.log(addTrack()); //expect found, so first conditional
console.log(collection);
console.log(`You added ${collection[2].cool = "Butt"}`);
console.log(collection[2].cool);
console.log(addTrack("We Fish Flounders", "Hold the Anchovies", "Those Salty Sardines", "2:56")); //expect found, so first conditional
// - End addTrack Function Testing -
// // - END TESTING SECTION -