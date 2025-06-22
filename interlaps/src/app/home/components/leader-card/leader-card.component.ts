import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-leader-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './leader-card.component.html',
  styleUrl: './leader-card.component.scss'
})
export class LeaderCardComponent {
  @Input() driverInfo:any={
    name:'Kimi Räikkönen '
    ,driverCode:'RAI'
    ,number:7
    ,team: 'Scuderia Ferrari'
    ,driverPhoto:'assets/svg/drivers/kimmi/kimmi.svg'
    ,wins: 21
    ,points:290
    ,record:'1:14.545 s'
  }
}
