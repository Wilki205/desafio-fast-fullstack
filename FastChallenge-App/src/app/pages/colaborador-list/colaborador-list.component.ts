import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradorService } from '../../services/colaborador.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-colaborador-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './colaborador-list.component.html',
  styleUrls: ['./colaborador-list.component.scss']
})
export class ColaboradorListComponent implements OnInit {
  colaboradores: any[] = [];

  constructor(private colaboradorService: ColaboradorService) {}

  ngOnInit(): void {
    this.carregarColaboradores();
  }

  carregarColaboradores(): void {
    this.colaboradorService.getColaboradores().subscribe({
      next: (data: any) => {
        this.colaboradores = data;
      },
      error: (err: any) => {
        console.error('Erro ao carregar colaboradores:', err);
      }
    });
  }
  
  excluirColaborador(id: number): void {
    if (confirm('Tem certeza que deseja excluir este colaborador?')) {
      this.colaboradorService.deleteColaborador(id).subscribe({
        next: () => {
          this.colaboradores = this.colaboradores.filter(c => c.id !== id);
        },
        error: (err) => {
          console.error('Erro ao excluir colaborador:', err);
          alert('Ocorreu um erro ao tentar excluir o colaborador.');
        }
      });
    }
  }
}