
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
  //If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
  if (prop !== "tracks" && value !== ""){
    collection[id][prop] = value;
  }
  //If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
  //"If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property."
  else if (prop == "tracks" && !collection[id].hasOwnProperty(prop)){
    collection[id][prop] = [];
    collection[id][prop].push(value);
  }
  else if (prop == "tracks" && value !== ""){
    if (collection[id].hasOwnProperty(prop)){
 	  collection[id][prop].push(value);
    }
  }
  //If value is empty (""), delete the given prop property from the album
  else if (value ===""){
    delete collection[id][prop];
  }  
  
  //Your function must always return the entire collection object.
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");