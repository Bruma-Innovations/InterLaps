import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 menuOpen = false;

 constructor(private route: Router){}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }

  navigateTo(path: string, event: Event) {
    event.preventDefault(); // Evita que el navegador recargue
    this.menuOpen = false;

    // Navega usando Angular Router
    this.route.navigateByUrl(path);
  }

   isActive(path: string): boolean {
    return this.route.url === path;
  }
}
