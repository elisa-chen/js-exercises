const ingredients = ['Pork', 'Tomato', 'Chicken', 'Lettuce', 'Beef', 'Carrots', 'Cucumber'];

for (i=0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
}

let vegetarian = [];
vegetarian[0] = ingredients[1];
vegetarian[1] = ingredients[3];
vegetarian[2] = ingredients[5];
vegetarian[3] = ingredients[6];

for (i=0; i < vegetarian.length; i++) {
    console.log(vegetarian[i]);
}

