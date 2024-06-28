import { Custumer } from "./costumers";

export class IndividualCustomer  implements Custumer {
    constructor(public name: string){
        this.name += '(INDIVIDUAL)';
    }
}