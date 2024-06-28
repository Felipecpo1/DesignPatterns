import { Custumer } from "../customer/costumers";
import { IndividualCustomer } from "../customer/individual-customer";
import { IndividualCar } from "../vehicle/individual-car";
import { Vehicle } from "../vehicle/vehicle";

export class IndividualCreateVehicleCustomerFactory {
    createCustumer(customerName: string): Custumer{
        return new IndividualCustomer(customerName);
    };

    createVehicle(vehicleName: string, customerName: string): Vehicle{
        const customer = this.createCustumer(customerName);
        return new IndividualCar(vehicleName, customer);
    }
} 