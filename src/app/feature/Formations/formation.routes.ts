import {FormationListComponent} from "./component/formation-list/formation-list.component";
import {FormationDetailComponent} from "./component/formation-detail/formation-detail.component";
import {Routes} from "@angular/router";

export const FORMATION_ROUTES: Routes = [
    { path: '', component: FormationListComponent },
    { path : ':id', component: FormationDetailComponent }
  ]
