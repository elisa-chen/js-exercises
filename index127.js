const iceCreamFlavors = ['chocolate', 'vanilla', 'pistachio', 'bubblegum', 'strawberry', 'creamsicle', 'caramel', 'orange', 'green tea', 'mint'];

let removedItemOne;
let removedItemTwo;

for (i=0; i < 2; i++) {
    if (i === 0) {
    removedItemOne = iceCreamFlavors.shift();
    }
    else {
    removedItemTwo = iceCreamFlavors.shift();
    }
}


console.log(iceCreamFlavors);
console.log(removedItemOne, removedItemTwo);
