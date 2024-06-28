import { Custumer } from "../customer/costumers";
import { Vehicle } from "./vehicle";

export class IndividualCar implements Vehicle {
    constructor(public name: string, private readonly customer: Custumer) {}
    pickUp(): void {
        console.log(`${this.name} está buscando ${this.customer.name} (INDIVIDUAL)`)
    }
}