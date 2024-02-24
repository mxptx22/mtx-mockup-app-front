import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientModuleComponent } from './patient-module/patient-module.component';
import { HCPModuleComponent } from './hcp-module/hcp-module.component';

const routes: Routes = [
  { component: PatientModuleComponent, path: 'patient' },
  { component: HCPModuleComponent, path: 'hcp' },
  { path: '**', component: PatientModuleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
