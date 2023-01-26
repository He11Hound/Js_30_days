//№1 типо это?


//№2
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
text = text.replace(/,/g, "");
text = text.replace(/\./g, "");
let arr = text.split(" ")
console.log(arr);
console.log(arr.length);

//№3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
let honeyAllergic = false;
if(shoppingCart.includes("Meat") == false){
    shoppingCart.unshift("Meat")
}
if(shoppingCart.includes("sugar") == false){
    shoppingCart.push("sugar")
}
if(honeyAllergic == true){
    let indexHoney = shoppingCart.findIndex(function(elem, index){
        if(elem == "Honey") return index;
    })
    shoppingCart.splice(indexHoney , 1);
}
if(shoppingCart.includes("Tea") == true){
    let indexTea = shoppingCart.findIndex(function(elem, index){
        if(elem == "Tea") return index;
    })
    shoppingCart[indexTea] = "Green Tea";
}
console.log(shoppingCart);

//№4
if(countries.includes("Ethiopia") == false){
    console.log("Ethiopia");
    countries.push("Ethiopia");
}

//№5 webTechs

if(webTechs.includes("Sass") == true){
    console.log("Sass - это препроцесс CSS");
}
else {
    webTechs.push("Sass");
    console.log(webTechs);
}

//№6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);