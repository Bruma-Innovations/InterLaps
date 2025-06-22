import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-leader-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './leader-card.component.html',
  styleUrl: './leader-card.component.scss'
})
export class LeaderCardComponent {
  driverInfo:any={
    name:'Ayrton Senna'
    ,team: 'McLaren Honda'
    ,wins: 5
    ,points:333
  }
}
