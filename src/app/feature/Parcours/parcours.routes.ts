import { Routes } from '@angular/router';
import { ParcoursListComponent } from './component/parcours-list/parcours-list.component';
import { ParcoursDetailComponent } from './component/parcours-detail/parcours-detail.component';

export const PARCOURS_ROUTES: Routes = [
  { path: '', component: ParcoursListComponent },
  { path: ':id', component: ParcoursDetailComponent }
];
