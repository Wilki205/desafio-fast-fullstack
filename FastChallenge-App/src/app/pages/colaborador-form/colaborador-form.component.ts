import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { ColaboradorService } from '../../services/colaborador.service';

@Component({
  selector: 'app-colaborador-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './colaborador-form.component.html',
  styleUrls: ['./colaborador-form.component.scss']
})
export class ColaboradorFormComponent implements OnInit { 
  colaborador: { id?: number, nome: string } = { nome: '' };
  isEditMode = false;
  pageTitle = 'Novo Colaborador';

  constructor(
    private colaboradorService: ColaboradorService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.pageTitle = 'Editar Colaborador';
      const id = +idParam; 
      this.colaboradorService.getColaboradorById(id).subscribe(data => {
        this.colaborador = data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.colaboradorService.updateColaborador(this.colaborador.id!, this.colaborador).subscribe({
        next: () => this.router.navigate(['/colaboradores']),
        error: (err) => console.error('Erro ao atualizar colaborador', err)
      });
    } else {
      this.colaboradorService.addColaborador(this.colaborador).subscribe({
        next: () => this.router.navigate(['/colaboradores']),
        error: (err) => console.error('Erro ao adicionar colaborador', err)
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}