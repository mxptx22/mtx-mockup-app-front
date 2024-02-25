import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientModuleComponent } from './patient-module.component';
import { PatientRoutingModule } from './patient-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MyHealthComponent } from './pages/my-health/my-health.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { CommonComponentsModule } from '../common/common-components.module';
import { MyPersonalRecordComponent } from './pages/my-health/my-personal-record/my-personal-record.component';
import { MyPrescriptionsComponent } from './pages/my-health/my-prescriptions/my-prescriptions.component';
import { MyTestResultsComponent } from './pages/my-health/my-test-results/my-test-results.component';
import { NotificationComponent } from './pages/notification/notification.component';

@NgModule({
  declarations: [
    PatientModuleComponent,
    HomeComponent,
    MyHealthComponent,
    MessagesComponent,
    MyPersonalRecordComponent,
    MyPrescriptionsComponent,
    MyTestResultsComponent,
    NotificationComponent,
  ],
  imports: [CommonModule, PatientRoutingModule, CommonComponentsModule],
})
export class PatientModule {}
