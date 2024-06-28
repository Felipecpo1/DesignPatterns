import { Custumer } from "../customer/costumers";
import { Vehicle } from "../vehicle/vehicle";

export interface CreateVehicleCustomer {
    createCustumer(customerName: string): Custumer;
    createVehicle(vehicleName: string, customerName: string): Vehicle;
} 