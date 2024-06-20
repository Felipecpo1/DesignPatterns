import { MealBox } from "./classes/meal-box";
import { Beans, Meat, Rice } from "./classes/meals";

const rice = new Rice("Arroz", 5);
const beans = new Beans("Feijao", 15);
const meat = new Meat("Carne", 25);
const mealBox = new MealBox();
mealBox.add(rice, beans, meat);
console.log(mealBox)
console.log(mealBox.getPrice())

