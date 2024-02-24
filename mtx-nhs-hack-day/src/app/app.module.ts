import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientModule } from './patient-module/patient.module';
import { HCPModule } from './hcp-module/hcp.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PatientModule, HCPModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
