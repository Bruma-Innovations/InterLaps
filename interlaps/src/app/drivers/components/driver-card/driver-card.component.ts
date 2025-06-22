import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-driver-card',
  standalone: true,
  imports: [],
  templateUrl: './driver-card.component.html',
  styleUrl: './driver-card.component.scss'
})
export class DriverCardComponent {
  @Input() driverInfo:any={
    name:'Lewis'
    ,lastName:'Hamilton'
    ,driverCode:'HAM'
    ,number:44
    
    ,team: 'Mercedes AMG Petronas'
    ,points:54
  }
  constructor(private route:Router){}
  driverDetail(){
    this.route.navigate(['pilotos/info']);
  }
}
