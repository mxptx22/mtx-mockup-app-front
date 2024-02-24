import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPersonalRecordComponent } from './my-personal-record.component';

describe('MyPersonalRecordComponent', () => {
  let component: MyPersonalRecordComponent;
  let fixture: ComponentFixture<MyPersonalRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPersonalRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPersonalRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
