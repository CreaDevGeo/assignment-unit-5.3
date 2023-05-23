console.log('***** Music Collection *****')
let collection = [];

function addToCollection (title, artist, yearPublished){
    console.log("You are now running addToCollection.");
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}

console.log(addToCollection("Rock Saviors", "Generic Rock Band", 2008));
console.log(collection);
console.log(addToCollection("Scissors", "Generic Rap Band", 2006));
console.log(collection[1]);
