import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qualy-result',
  standalone: true,
  imports: [],
  templateUrl: './qualy-result.component.html',
  styleUrl: './qualy-result.component.scss'
})
export class QualyResultComponent {
  @Input() driverInfo:any={
    name:'Pole'
    ,lastName:'1:42.553'
    ,driverCode:'HAM'
    ,number:44
    
    ,team: 'GP Bélgica'
    ,points:2025
  }
}
