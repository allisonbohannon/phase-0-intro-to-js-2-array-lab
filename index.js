// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat(newCat) {
    cats.push(newCat); 
    return cats; 
}; 

function destructivelyPrependCat(newCat) {
    cats.unshift(newCat); 
    return cats; 
}; 

function destructivelyRemoveFirstCat() {
    cats.shift(); 
    return cats; 

}; 

function destructivelyRemoveLastCat() {
    cats.pop(); 
    return cats; 
}


function appendCat(newCat) {
    const newArr = [...cats, newCat]; 
    return newArr; 
}; 

function prependCat(newCat) {
    const newArr = [newCat, ...cats]; 
    return newArr; 
}; 

function removeFirstCat() {
    return cats.slice(1); 
}; 

function removeLastCat() {
    return cats.slice(0, cats.length - 1)
};