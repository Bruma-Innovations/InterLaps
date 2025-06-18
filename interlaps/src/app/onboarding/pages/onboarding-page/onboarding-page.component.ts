import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-onboarding-page',
  standalone: true,
  imports: [],
  templateUrl: './onboarding-page.component.html',
  styleUrl: './onboarding-page.component.scss'
})
export class OnboardingPageComponent implements OnInit {
  constructor(private route: Router){
    
  }

    ngOnInit() {
    setTimeout(() => {
      this.route.navigateByUrl('/inicio', { replaceUrl: true });
    }, 3000); // Espera 3 segundos y luego redirige
  }
}
