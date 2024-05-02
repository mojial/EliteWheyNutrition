import { Component } from '@angular/core';
import { NavigationEnd,Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RegisterComponent } from "./components/register/register.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, MainComponent, FooterComponent, RegisterComponent]
})
export class AppComponent {
  title = 'TFG';
  showHeader: boolean = true;
  showFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader = !this.shouldHideHeader(event.url);
        this.showFooter = !this.shouldHideFooter(event.url);
      }
    });
  }

  private shouldHideHeader(url: string): boolean {
    return url.includes('register') || url.includes('login') || url.includes('allproducts') || url.includes('cart') 
    || url.includes('creatine') || url.includes('proteina') 
    || url.includes('aminoacidos') || url.includes('hidratos') 
    || url.includes('preentrenos') || url.includes('controldepeso') 
    || url.includes('barritas') || url.includes('vitaminasminerales') 
    || url.includes('quemagrasas') || url.includes('intraentrenos') ;
  }

  private shouldHideFooter(url: string): boolean {
    return url.includes('register') || url.includes('login');
  }
}