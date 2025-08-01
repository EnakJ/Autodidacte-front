import {ProgrammeListComponent} from "./component/programme-list/programme-list.component";
import {Routes} from "@angular/router";
import {ProgrammeDetailComponent} from "./component/programme-detail/programme-detail.component";

export const PROGRAMME_ROUTES : Routes = [
  { path: '', component: ProgrammeListComponent },
  { path: ':id', component: ProgrammeDetailComponent }
]
