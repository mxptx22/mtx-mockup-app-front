import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientModuleComponent } from './patient-module.component';
import { PatientRoutingModule } from './patient-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MyHealthComponent } from './pages/my-health/my-health.component';
import { MessagesComponent } from './pages/messages/messages.component';

@NgModule({
  declarations: [PatientModuleComponent, HomeComponent, MyHealthComponent, MessagesComponent],
  imports: [CommonModule, PatientRoutingModule],
})
export class PatientModule {}
