import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ColaboradorListComponent } from './pages/colaborador-list/colaborador-list.component';
import { ColaboradorFormComponent } from './pages/colaborador-form/colaborador-form.component';
import { WorkshopListComponent } from './pages/workshop-list/workshop-list.component';
import { WorkshopDetailComponent } from './pages/workshop-detail/workshop-detail.component';
import { WorkshopFormComponent } from './pages/workshop-form/workshop-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'colaboradores', component: ColaboradorListComponent },
      { path: 'colaboradores/novo', component: ColaboradorFormComponent },
      { path: 'colaboradores/editar/:id', component: ColaboradorFormComponent },

      { path: 'workshops', component: WorkshopListComponent },
      { path: 'workshops/novo', component: WorkshopFormComponent },
      { path: 'workshops/editar/:id', component: WorkshopFormComponent },
      { path: 'workshops/:id', component: WorkshopDetailComponent },
      
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'colaboradores', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];