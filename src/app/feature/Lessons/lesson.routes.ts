import {Routes} from "@angular/router";
import {LessonListComponent} from "./components/lesson-list/lesson-list.component";
import {LessonDetailComponent} from "./components/lesson-detail/lesson-detail.component";

export const LESSON_ROUTES : Routes = [
  { path: '', component: LessonListComponent },
  { path: ':id', component: LessonDetailComponent }
]
