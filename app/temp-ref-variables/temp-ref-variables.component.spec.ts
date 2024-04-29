import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempRefVariablesComponent } from './temp-ref-variables.component';

describe('TempRefVariablesComponent', () => {
  let component: TempRefVariablesComponent;
  let fixture: ComponentFixture<TempRefVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempRefVariablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempRefVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
