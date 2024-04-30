import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplouyeeDetailsComponent } from './emplouyee-details.component';

describe('EmplouyeeDetailsComponent', () => {
  let component: EmplouyeeDetailsComponent;
  let fixture: ComponentFixture<EmplouyeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplouyeeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplouyeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
