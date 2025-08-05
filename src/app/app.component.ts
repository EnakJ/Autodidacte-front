import { Component } from '@angular/core';
import {MainPageComponent} from "./shared/pages/main-page/main-page.component";
import {HeaderComponent} from "./shared/pages/header/header.component";
import {FooterComponent} from "./shared/pages/footer/footer.component";
import {SidebarComponent} from "./shared/pages/sidebar/sidebar.component";
import {provideHttpClient} from "@angular/common/http";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
      HeaderComponent, SidebarComponent, FooterComponent, MainPageComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'autodidacte-front';
}
