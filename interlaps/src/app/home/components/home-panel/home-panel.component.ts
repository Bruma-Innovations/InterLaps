import { Component } from '@angular/core';
import { HomeCardComponent } from "../home-card/home-card.component";
import { LeaderCardComponent } from "../leader-card/leader-card.component";

@Component({
  selector: 'app-home-panel',
  standalone: true,
  imports: [HomeCardComponent, LeaderCardComponent],
  templateUrl: './home-panel.component.html',
  styleUrl: './home-panel.component.scss'
})
export class HomePanelComponent {

}
