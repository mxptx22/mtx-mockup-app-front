import { RouterModule, Routes } from '@angular/router';
import { PatientModuleComponent } from './patient-module.component';
import { HomeComponent } from './pages/home/home.component';
import { MyHealthComponent } from './pages/my-health/my-health.component';
import { MessagesComponent } from './pages/messages/messages.component';

const routes: Routes = [
  {
    path: '',
    component: PatientModuleComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'my-health',
        component: MyHealthComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      },
    ],
  },
];

export const PatientRoutingModule = RouterModule.forChild(routes);
