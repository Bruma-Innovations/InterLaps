import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDetailPanelComponent } from './driver-detail-panel.component';

describe('DriverDetailPanelComponent', () => {
  let component: DriverDetailPanelComponent;
  let fixture: ComponentFixture<DriverDetailPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverDetailPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriverDetailPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
