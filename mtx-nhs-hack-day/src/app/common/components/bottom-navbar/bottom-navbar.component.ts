import { Location } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';
import { Page } from 'src/app/patient-module/types/pages';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.scss'],
})
export class BottomNavbarComponent implements OnInit, OnDestroy {
  @Input() section?: 'hcp' | 'patient' = 'patient';
  @Input() pages?: Map<string, Page>;
  currentPage?: string;
  pagesArr: Page[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.subsToCurrentSegment();
  }

  ngOnInit(): void {
    if (!this.pages) throw new Error('Missing Pages');
    this.pagesArr = this.convertMapToPagesArr(this.pages);
  }

  navigateToSection(pagePath: string): void {
    this.router.navigate([`${pagePath}`], {
      relativeTo: this.route,
    });
  }

  private convertMapToPagesArr(pagesMap: Map<string, Page>): Page[] {
    return [...pagesMap.values()];
  }

  private subsToCurrentSegment() {
    this.router.events
      .pipe(
        takeUntil(this.$ngDestroy),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe((_) => {
        this.currentPage = this.route.snapshot.firstChild?.routeConfig?.path;
      });
  }

  $ngDestroy = new Subject();
  ngOnDestroy(): void {
    this.$ngDestroy.next(true);
    this.$ngDestroy.complete();
  }
}
