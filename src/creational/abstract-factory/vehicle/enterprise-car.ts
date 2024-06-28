import { Custumer } from "../customer/costumers";
import { Vehicle } from "./vehicle";

export class EnterpriseCar implements Vehicle {
    constructor(public name: string, private readonly customer: Custumer) {}
    pickUp(): void {
        console.log(`${this.name} está buscando ${this.customer.name} (ENTERPRISE)`)
    }
}