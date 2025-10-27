import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs'; 
import { ColaboradorService } from '../../services/colaborador.service';
import { WorkshopService } from '../../services/workshop.service';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } } 
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Workshops Participados', backgroundColor: '#3498db' }
    ]
  };

  constructor(
    private colaboradorService: ColaboradorService,
    private workshopService: WorkshopService
  ) {}

  ngOnInit(): void {
    forkJoin({
      colaboradores: this.colaboradorService.getColaboradores(),
      workshops: this.workshopService.getWorkshops()
    }).subscribe(({ colaboradores, workshops }) => {
      this.processarDadosParaGrafico(colaboradores, workshops);
    });
  }

  processarDadosParaGrafico(colaboradores: any[], workshops: any[]): void {
    const participationCount = new Map<string, number>();

    colaboradores.forEach(c => participationCount.set(c.nome, 0));

    workshops.forEach(w => {
      if (w.colaboradores) {
        w.colaboradores.forEach((participante: any) => {
          const colaboradorNome = participante.nome;
          if (participationCount.has(colaboradorNome)) {
            participationCount.set(colaboradorNome, participationCount.get(colaboradorNome)! + 1);
          }
        });
      }
    });

    const labels = Array.from(participationCount.keys());
    const data = Array.from(participationCount.values());

    this.barChartData = {
      labels: labels,
      datasets: [{ data: data, label: 'Workshops Participados', backgroundColor: '#3498db' }]
    };
  }
}