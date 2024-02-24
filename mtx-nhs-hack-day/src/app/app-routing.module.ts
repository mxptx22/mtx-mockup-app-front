import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientModuleComponent } from './patient-module/patient-module.component';
import { HCPModuleComponent } from './hcp-module/hcp-module.component';

const routes: Routes = [
  {
    path: 'patient',
    loadChildren: () =>
      import('./patient-module/patient.module').then((m) => m.PatientModule),
  },
  {
    path: 'hcp',
    loadChildren: () =>
      import('./hcp-module/hcp.module').then((m) => m.HCPModule),
  },
  // { path: '**', component: PatientModuleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
