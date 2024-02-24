import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientModuleComponent } from './patient-module.component';
import { PatientRoutingModule } from './patient-routing.module';

@NgModule({
  declarations: [PatientModuleComponent],
  imports: [CommonModule, PatientRoutingModule],
})
export class PatientModule {}
