/* Adjective of the person */

words = [
'tall',
'big',
'fat',
'smart'
];

function randomWord() {
document.getElementById("textbox").value = words[Math.floor(Math.random() * words.length)];
}

//Type of person

words1 = [
'girl',
'fairy',
'elf',
'student'
];

function randomPerson() {
document.getElementById("textbox1").value = words1[Math.floor(Math.random() * words1.length)];
}


//Dwelling


dwellings = [
'manor.',
'castle.',
'cottage.',
'loft.'
];

function randomDwelling() {
document.getElementById("textbox2").value = dwellings[Math.floor(Math.random() * words1.length)];
}

//Pet

pets = [
'parrot',
'bird',
'chicken',
'cockatoo'
];

function randomPet() {
document.getElementById("textbox3").value = pets[Math.floor(Math.random() * words1.length)];
}
