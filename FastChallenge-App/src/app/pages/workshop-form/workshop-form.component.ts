import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkshopService } from '../../services/workshop.service';

@Component({
  selector: 'app-workshop-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workshop-form.component.html',
  styleUrls: ['./workshop-form.component.scss']
})
export class WorkshopFormComponent implements OnInit {
  workshop: any = { nome: '', descricao: '', dataRealizacao: '' };
  isEditMode = false;
  pageTitle = 'Novo Workshop';

  constructor(
    private workshopService: WorkshopService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.pageTitle = 'Editar Workshop';
      const id = +idParam;
      this.workshopService.getWorkshopById(id).subscribe(data => {
        data.dataRealizacao = new Date(data.dataRealizacao).toISOString().split('T')[0];
        this.workshop = data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.workshopService.updateWorkshop(this.workshop.id!, this.workshop).subscribe({
        next: () => this.router.navigate(['/workshops']),
        error: (err) => console.error('Erro ao atualizar workshop', err)
      });
    } else {
      this.workshopService.addWorkshop(this.workshop).subscribe({
        next: () => this.router.navigate(['/workshops']),
        error: (err) => console.error('Erro ao adicionar workshop', err)
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}