import { Component } from '@angular/core';
import {MainPageComponent} from "./shared/pages/main-page/main-page.component";
import {HeaderComponent} from "./shared/pages/header/header.component";
import {FooterComponent} from "./shared/pages/footer/footer.component";

@Component({
    selector: 'app-root',
    imports: [MainPageComponent, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'autodidacte-front';
}
