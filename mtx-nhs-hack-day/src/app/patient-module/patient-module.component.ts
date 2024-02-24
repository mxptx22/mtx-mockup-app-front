import { Component } from '@angular/core';
import { PagesMap } from './consts/pages';

@Component({
  selector: 'app-patient-module',
  templateUrl: './patient-module.component.html',
  styleUrls: ['./patient-module.component.scss'],
})
export class PatientModuleComponent {
  patientPages = PagesMap;
}
