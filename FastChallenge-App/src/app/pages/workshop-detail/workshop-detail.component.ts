import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { WorkshopService } from '../../services/workshop.service';
import { ColaboradorService } from '../../services/colaborador.service'; 
import { PresencaService } from '../../services/presenca.service'; 
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-workshop-detail',
  standalone: true,
  imports: [CommonModule, BaseChartDirective, FormsModule],
  templateUrl: './workshop-detail.component.html',
  styleUrls: ['./workshop-detail.component.scss']
})
export class WorkshopDetailComponent implements OnInit {
  workshop: any = null;
  workshopId: number = 0;
  todosColaboradores: any[] = []; 
  colaboradorSelecionadoId: number | null = null; 

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private workshopService: WorkshopService,
    private colaboradorService: ColaboradorService, 
    private presencaService: PresencaService 
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.workshopId = +idParam;
      this.carregarDadosDaPagina();
    }
  }

  carregarDadosDaPagina(): void {
    forkJoin({
      workshop: this.workshopService.getWorkshopById(this.workshopId),
      colaboradores: this.colaboradorService.getColaboradores()
    }).subscribe({
      next: ({ workshop, colaboradores }) => {
        this.workshop = workshop;
        this.todosColaboradores = colaboradores;
        this.atualizarGrafico(); 
      },
      error: (err) => console.error('Erro ao carregar dados da página:', err)
    });
  }

  atualizarGrafico(): void {
    if (!this.workshop.colaboradores) { this.workshop.colaboradores = []; }
    const totalColaboradores = this.todosColaboradores.length;
    const participantes = this.workshop.colaboradores.length;
    this.pieChartData = {
      ...this.pieChartData,
      datasets: [{ data: [participantes, totalColaboradores - participantes] }]
    };
  }

  adicionarParticipante(): void {
    if (!this.colaboradorSelecionadoId) {
      alert('Por favor, selecione um colaborador.');
      return;
    }

    const dadosPresenca = {
      colaboradorId: this.colaboradorSelecionadoId,
      workshopId: this.workshopId
    };

    this.presencaService.adicionarPresenca(dadosPresenca).subscribe({
      next: () => {
        alert('Participante adicionado com sucesso!');
        this.carregarDadosDaPagina(); 
      },
      error: (err) => {
        console.error('Erro ao adicionar participante:', err);
        alert('Erro ao adicionar participante. Ele já pode estar na lista.');
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  public pieChartOptions: ChartOptions = { responsive: true };
  public pieChartLegend = true;
  public pieChartType: ChartType = 'pie';
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Participantes', 'Ausentes'],
    datasets: [{ data: [0, 0] }]
  };
}