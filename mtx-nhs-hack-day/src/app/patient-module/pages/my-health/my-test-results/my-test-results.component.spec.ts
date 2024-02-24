import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestResultsComponent } from './my-test-results.component';

describe('MyTestResultsComponent', () => {
  let component: MyTestResultsComponent;
  let fixture: ComponentFixture<MyTestResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTestResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTestResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
