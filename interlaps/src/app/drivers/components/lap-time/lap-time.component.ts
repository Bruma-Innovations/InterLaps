import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '22.123', weight: 50, symbol: '343 m'},
  {position: 2, name: '22.123', weight: 50, symbol: '343 m'},
  {position: 3, name: '22.123', weight: 50, symbol: '343 m'},
  {position: 4, name: '22.123', weight: 50, symbol: '343 m'},
  {position: 5, name: '22.123', weight: 50, symbol: '343 m'},
  {position: 6, name: '22.123', weight: 50, symbol: '343 m'},
  {position: 7, name: '22.123', weight: 50, symbol: '343 m'},
  {position: 8, name: '22.123', weight: 50, symbol: '343 m'},
]
@Component({
  selector: 'app-lap-time',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './lap-time.component.html',
  styleUrl: './lap-time.component.scss'
})
export class LapTimeComponent {
  displayedColumns: string[] = ['lap', 'time', 'speed', 'distance'];
  dataSource = ELEMENT_DATA
}
