import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-race-result',
  standalone: true,
  imports: [],
  templateUrl: './race-result.component.html',
  styleUrl: './race-result.component.scss'
})
export class RaceResultComponent {
  @Input() driverInfo:any={
    name:'P1'
    ,lastName:'1:42.553'
    ,driverCode:'HAM'
    ,number:44
    
    ,team: 'GP Bélgica'
    ,points:2025
  }
}
