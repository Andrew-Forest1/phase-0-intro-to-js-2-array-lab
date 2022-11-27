// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function prependCat(name){
    let cats2 = [...cats];
    cats2.unshift(name);
    return cats2;
}

function appendCat(name){
    let cats2 = [...cats];
    cats2.push(name);
    return cats2;
}

function removeLastCat(){
    // let cats2 = [...cats];
    // cats2.pop();
    // return cats2;
    return cats.slice(0,cats.length - 1);
}

function removeFirstCat(){
    return cats.slice(1);
}

console.log(cats)
console.log(cats.slice(0,cats.length - 1))