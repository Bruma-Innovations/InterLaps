import { Component } from '@angular/core';
import { DriverDetailComponent } from "../driver-detail/driver-detail.component";
import { LapTimeComponent } from "../lap-time/lap-time.component";
import { QualyResultComponent } from "../qualy-result/qualy-result.component";
import { RaceResultComponent } from "../race-result/race-result.component";

@Component({
  selector: 'app-driver-detail-panel',
  standalone: true,
  imports: [DriverDetailComponent, LapTimeComponent, QualyResultComponent, RaceResultComponent],
  templateUrl: './driver-detail-panel.component.html',
  styleUrl: './driver-detail-panel.component.scss'
})
export class DriverDetailPanelComponent {

}
