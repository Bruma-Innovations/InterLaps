import { Component } from '@angular/core';
import { DriverDetailComponent } from "../../components/driver-detail/driver-detail.component";
import { DriverDetailPanelComponent } from "../../components/driver-detail-panel/driver-detail-panel.component";

@Component({
  selector: 'app-drivers-info-page',
  standalone: true,
  imports: [DriverDetailComponent, DriverDetailPanelComponent],
  templateUrl: './drivers-info-page.component.html',
  styleUrl: './drivers-info-page.component.scss'
})
export class DriversInfoPageComponent {

}
