import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router'; 
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout(); 
    this.router.navigate(['/login']); 
  }
}