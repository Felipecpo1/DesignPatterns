
/*
O builder evita que o codigo seja criado desse tamanho
------------------------------------------------------
import { MealBox } from "./classes/meal-box";
import { Beans, Meat, Rice } from "./classes/meals";

const rice = new Rice("Arroz", 5);
const beans = new Beans("Feijao", 15);
const meat = new Meat("Carne", 5);
const mealBox = new MealBox();
mealBox.add(rice, beans, meat);
console.log(mealBox)
console.log(mealBox.getPrice())]
------------------------------------------------------
e seja criado como abaixo:
*/

import { MainDishBuilder } from "./classes/make-dish-builder";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal())
console.log(mainDishBuilder.getPrice())

mainDishBuilder.reset()

/// criando outro obj com o builder
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2)

/// isso tira a complexidade e o conhecimento das classes usadas no cliente, que é o index
/// desacoplando o codigo

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal)
console.log(veganMeal.getPrice())

