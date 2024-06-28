import { Custumer } from "./costumers";

export class EnterpriseCustomer  implements Custumer {
    constructor(public name: string){
        this.name += '(ENTERPRISE)';

    }
}