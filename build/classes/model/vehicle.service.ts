import { Injectable } from '@angular/core';

let vehicles = [
    {
        id: 1,
        name: 'Trailer - 1',
        type: 'Truck',
        mass: 40
    },
    {
        id: 2,
        name: 'An-2',
        type: 'Plane',
        mass: 5
    },
    {
        id: 3,
        name: 'LandCruiser 80',
        mass: 2
    },
]

@Injectable()
export class VehicleService {

    private vehicles;

    constructor() { 
        this.vehicles = vehicles;
    }
    
    getVehicles() {
        return this.vehicles;
    }
}
