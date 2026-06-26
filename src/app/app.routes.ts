import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/home/home';
import { NuevaHipotecaPageComponent } from './pages/nueva-hipoteca/nueva-hipoteca';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'nueva-hipoteca', component: NuevaHipotecaPageComponent },
];
