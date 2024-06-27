import { CarFactory } from "./factories/car-factory";
import { RandomCarAlg } from "./main/random-vehicle-alg";
import { RandomNumbers } from "./utils/random-numbers";
/*import { CarFactory } from "./factories/car-factory";

const carFactory = new CarFactory
const fusca = carFactory.getVehicle('Fusca')
fusca.pickUp('Aline');
fusca.stop()*/


const customerNames = ['Ana', 'Flavia', 'Carlos', 'Patrick']
const carFactory = new CarFactory();

for (let i=0; i< 10; i++) {
    const vehicle = RandomCarAlg();
    const name =  customerNames[RandomNumbers(customerNames.length)]
    vehicle.pickUp(name);
    vehicle.stop();

    const newCar = carFactory.pickUp(name, `Novo Carro - ${RandomNumbers(100)}`);
    newCar.stop();
    console.log('----');
}
