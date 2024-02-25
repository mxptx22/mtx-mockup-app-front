import { RouterModule, Routes } from '@angular/router';
import { PatientModuleComponent } from './patient-module.component';
import { HomeComponent } from './pages/home/home.component';
import { MyHealthComponent } from './pages/my-health/my-health.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MyPersonalRecordComponent } from './pages/my-health/my-personal-record/my-personal-record.component';
import { MyPrescriptionsComponent } from './pages/my-health/my-prescriptions/my-prescriptions.component';
import { MyTestResultsComponent } from './pages/my-health/my-test-results/my-test-results.component';
import { NotificationComponent } from './pages/notification/notification.component';

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
        children: [
          {
            path: '',
            component: MyHealthComponent,
          },
          {
            path: 'personal-record',
            component: MyPersonalRecordComponent,
          },
          {
            path: 'prescriptions',
            component: MyPrescriptionsComponent,
          },
          {
            path: 'test-results',
            component: MyTestResultsComponent,
          },
        ],
      },
      {
        path: 'messages',
        component: MessagesComponent,
      },
      {
        path: 'notification',
        component: NotificationComponent,
      }
    ],
  },
];

export const PatientRoutingModule = RouterModule.forChild(routes);
