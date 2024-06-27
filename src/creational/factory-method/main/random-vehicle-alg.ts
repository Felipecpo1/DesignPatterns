import { BicycleFactory } from "../factories/bicycle-factory";
import { CarFactory } from "../factories/car-factory";
import { RandomNumbers } from "../utils/random-numbers";
import { Vehicle } from "../vehicle/vehicle";

//a ideia desse codigo é adcionar um catalogo de carros para serem requisitados por pessoas
export function RandomCarAlg(): Vehicle {
    const carFactory = new CarFactory();
    const bicycleFactory = new BicycleFactory();
    const car1 = carFactory.getVehicle('Fusca')
    const car2 = carFactory.getVehicle('Celta')
    const bicycle = bicycleFactory.getVehicle('Bicicleta');
    const cars = [car1, car2, bicycle]
    return cars[RandomNumbers(cars.length)]
} 