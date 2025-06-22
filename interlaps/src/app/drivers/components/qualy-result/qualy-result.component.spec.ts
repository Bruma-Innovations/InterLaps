import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualyResultComponent } from './qualy-result.component';

describe('QualyResultComponent', () => {
  let component: QualyResultComponent;
  let fixture: ComponentFixture<QualyResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualyResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
