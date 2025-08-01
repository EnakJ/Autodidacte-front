import { Component } from '@angular/core';
import {MainPageComponent} from "./shared/pages/main-page/main-page.component";
import {HeaderComponent} from "./shared/pages/header/header.component";
import {FooterComponent} from "./shared/pages/footer/footer.component";
import {SidebarComponent} from "./shared/pages/sidebar/sidebar.component";

@Component({
    selector: 'app-root',
    imports: [MainPageComponent, HeaderComponent, SidebarComponent ,FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'autodidacte-front';
}
