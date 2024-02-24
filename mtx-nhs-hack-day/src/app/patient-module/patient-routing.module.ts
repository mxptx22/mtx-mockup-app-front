import { RouterModule, Routes } from '@angular/router';
import { PatientModuleComponent } from './patient-module.component';

const routes: Routes = [
  {
    path: '',
    component: PatientModuleComponent,
  },
];

export const PatientRoutingModule = RouterModule.forChild(routes);
