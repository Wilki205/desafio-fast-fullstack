import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss' 
})
export class LoginComponent {
  credentials = { username: 'fast', password: 'desafio@2025' };
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.authService.login(this.credentials).subscribe({
      next: () => {
        this.router.navigate(['/colaboradores']);
      },
      error: (err: any) => {
        console.error('Falha no login', err);
        this.errorMessage = 'Usuário ou senha inválidos. Tente novamente.';
      }
    });
  }
}