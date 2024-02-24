import { RouterModule, Routes } from '@angular/router';
import { HCPModuleComponent } from './hcp-module.component';

const routes: Routes = [
  {
    path: '',
    component: HCPModuleComponent,
  },
];

export const HCPRoutingModule = RouterModule.forChild(routes);
