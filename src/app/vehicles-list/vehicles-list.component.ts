import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../model/vehicle.service';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: 'vehicles-list.component.html',
  styleUrls: ['vehicles-list.component.css'],
  providers: [VehicleService]
})
export class VehiclesListComponent implements OnInit {

  vehicles: Vehicle[];
  selectedVehicle: Vehicle;

  constructor(private vehicleService: VehicleService) {
    this.vehicles = this.vehicleService.getVehicles();
  }

  ngOnInit() {
  }

  onSelect(vehicle: Vehicle) { this.selectedVehicle = vehicle; }

}
