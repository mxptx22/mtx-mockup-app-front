import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from 'src/app/patient-module/types/pages';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.scss'],
})
export class BottomNavbarComponent implements OnInit {
  @Input() section?: 'hcp' | 'patient' = 'patient';
  @Input() pages?: Map<string, Page>;
  currentPage?: string;
  pagesArr: Page[] = [];

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this.pages) throw new Error('Missing Pages');
    this.pagesArr = this.convertMapToPagesArr(this.pages);
    this.currentPage = this.getCurrentSegment(this.location);
  }

  navigateToSection(pagePath: string): void {
    this.router.navigate([`${pagePath}`], {
      relativeTo: this.route,
    });
  }

  private convertMapToPagesArr(pagesMap: Map<string, Page>): Page[] {
    return [...pagesMap.values()];
  }

  private getCurrentSegment(location: Location): string {
    const path = this.location.path();
    const segments = path.split('/');
    return segments[segments.length - 1];
  }
}
