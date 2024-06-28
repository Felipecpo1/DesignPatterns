import { Custumer } from "../customer/costumers";
import { EnterpriseCustomer } from "../customer/enterprise-customer";
import { EnterpriseCar } from "../vehicle/enterprise-car";
import { Vehicle } from "../vehicle/vehicle";

export class EnterpriseCreateVehicleCustomerFactory {
    createCustumer(customerName: string): Custumer{
        return new EnterpriseCustomer(customerName);
    };

    createVehicle(vehicleName: string, customerName: string): Vehicle{
        const customer = this.createCustumer(customerName);
        return new EnterpriseCar(vehicleName, customer);
    }
} 