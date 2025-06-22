import { Component } from '@angular/core';
import { DriversPanelComponent } from "../../components/drivers-panel/drivers-panel.component";

@Component({
  selector: 'app-drivers-page',
  standalone: true,
  imports: [DriversPanelComponent],
  templateUrl: './drivers-page.component.html',
  styleUrl: './drivers-page.component.scss'
})
export class DriversPageComponent {

}
