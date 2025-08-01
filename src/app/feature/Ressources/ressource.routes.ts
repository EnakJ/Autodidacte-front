import {Routes} from "@angular/router";
import {RessourceListComponent} from "./components/ressource-list/ressource-list.component";
import {RessourceDetailComponent} from "./components/ressource-detail/ressource-detail.component";

export const RESSOURCE_ROUTES : Routes = [
  { path : '', component: RessourceListComponent },
  { path : ':id', component: RessourceDetailComponent }
]
