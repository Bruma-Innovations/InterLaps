import { Component } from '@angular/core';
import { HomePanelComponent } from "../../components/home-panel/home-panel.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomePanelComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
