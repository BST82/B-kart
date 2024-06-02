import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SliderComponent } from "./components/slider/slider.component";
import { CardsComponent } from "./components/cards/cards.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, SliderComponent, CardsComponent, FooterComponent]
})
export class AppComponent {
  title = 'flipkartclone';
}
