import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { DriverCardComponent } from "../driver-card/driver-card.component";
@Component({
  selector: 'app-drivers-panel',
  standalone: true,
  imports: [MatTabsModule, DriverCardComponent],
  templateUrl: './drivers-panel.component.html',
  styleUrl: './drivers-panel.component.scss'
})
export class DriversPanelComponent {

}
