import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopService } from '../../services/workshop.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-workshop-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.scss']
})
export class WorkshopListComponent implements OnInit {
  workshops: any[] = [];

  constructor(private workshopService: WorkshopService) {}

  ngOnInit(): void {
    this.carregarWorkshops();
  }

  carregarWorkshops(): void {
    this.workshopService.getWorkshops().subscribe({
      next: (data: any) => { this.workshops = data; },
      error: (err: any) => { console.error('Erro ao carregar workshops:', err); }
    });
  }

  excluirWorkshop(id: number): void {
    if (confirm('Tem certeza que deseja excluir este workshop?')) {
      this.workshopService.deleteWorkshop(id).subscribe({
        next: () => {
          this.workshops = this.workshops.filter(w => w.id !== id);
        },
        error: (err) => {
          console.error('Erro ao excluir workshop:', err);
          alert('Ocorreu um erro ao tentar excluir o workshop.');
        }
      });
    }
  }
}