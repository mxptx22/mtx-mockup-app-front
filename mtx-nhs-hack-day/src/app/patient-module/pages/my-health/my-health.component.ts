import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyHealthPagesMap } from '../../consts/pages';

@Component({
  selector: 'app-my-health',
  templateUrl: './my-health.component.html',
  styleUrls: ['./my-health.component.scss'],
})
export class MyHealthComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  myHealthPages = MyHealthPagesMap;

  navigateToSection(pagePath: string): void {
    this.router.navigate([`${pagePath}`], {
      relativeTo: this.route,
    });
  }
}
