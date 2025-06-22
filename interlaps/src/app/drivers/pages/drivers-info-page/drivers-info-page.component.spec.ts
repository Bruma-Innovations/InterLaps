import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversInfoPageComponent } from './drivers-info-page.component';

describe('DriversInfoPageComponent', () => {
  let component: DriversInfoPageComponent;
  let fixture: ComponentFixture<DriversInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriversInfoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriversInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
