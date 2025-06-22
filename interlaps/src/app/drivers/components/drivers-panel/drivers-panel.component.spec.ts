import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversPanelComponent } from './drivers-panel.component';

describe('DriversPanelComponent', () => {
  let component: DriversPanelComponent;
  let fixture: ComponentFixture<DriversPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriversPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriversPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
