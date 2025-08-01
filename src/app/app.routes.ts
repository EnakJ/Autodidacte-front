import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'programme',
    loadChildren: () => import('./feature/Programmes/programme.routes')
      .then(m => m.PROGRAMME_ROUTES)
  },
  {
    path: 'parcours',
    loadChildren: () => import('./feature/Parcours/parcours.routes')
      .then(m => m.PARCOURS_ROUTES)
  },
  {
    path: 'formation',
    loadChildren: () => import('./feature/Formations/formation.routes')
      .then(m => m.FORMATION_ROUTES)
  },
  {
    path: 'lesson',
    loadChildren: () => import('./feature/Lessons/lesson.routes')
      .then(m => m.LESSON_ROUTES)
  },
  {
    path: 'ressource',
    loadChildren: () => import('./feature/Ressources/ressource.routes')
      .then(m => m.RESSOURCE_ROUTES)
  }
];
