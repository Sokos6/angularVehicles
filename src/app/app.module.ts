import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { VehiclesListComponent} from './vehicles-list/vehicles-list.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesListComponent,
    VehicleDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
