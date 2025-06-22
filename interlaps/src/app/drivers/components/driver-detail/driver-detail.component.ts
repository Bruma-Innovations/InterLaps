import { Component } from '@angular/core';

@Component({
  selector: 'app-driver-detail',
  standalone: true,
  imports: [],
  templateUrl: './driver-detail.component.html',
  styleUrl: './driver-detail.component.scss'
})
export class DriverDetailComponent {
  driverInfo:any={
    name:'Lewis'
    ,lastName:'Hamilton'
    ,driverCode:'HAM'
    ,number:44
    
    ,team: 'Mercedes AMG Petronas'
    ,points:54
  }
}
