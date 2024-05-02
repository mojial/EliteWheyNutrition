import { Component } from '@angular/core';
import { Product } from "../../interfaces/product";
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  products!: Product[];
  constructor(private route: ActivatedRoute,private DataService: DataService) {}

  ngOnInit() {
    this.route.url.subscribe(segments => {
      // Verificar la ruta actual y realizar la petición correspondiente
      switch (segments[0]?.path) {
        case 'allproducts':
          this.DataService.getElitewheyUrlReponse().subscribe((response: Product[]) => {
            this.products = response;
          });
          break;
        case 'creatine':
          this.DataService.creatinaReponse().subscribe((response: Product[]) => {
            this.products = response;
          });
          break;
        case 'proteina':
          this.DataService.proteinaResponse().subscribe((response: Product[]) => {
            this.products = response;
          });
          break;
        case 'aminoacidos':
          this.DataService.aminoacidosResponse().subscribe((response: Product[]) => {
            this.products = response;
          });
          break;
        case 'hidratos':
          this.DataService.hidratosResponse().subscribe((response: Product[]) => {
            this.products = response;
          });
          break;
        case 'preentrenos':
          this.DataService.preentrenosResponse().subscribe((response: Product[]) => {
            this.products = response;
          });
          break;
        case 'controldepeso':
          this.DataService.controldepesoResponse().subscribe((response: Product[]) => {
            this.products = response;
          });
          break;
        case 'barritas':
          this.DataService.barritasResponse().subscribe((response: Product[]) => {
            this.products = response;
          });
          break;
        case 'vitaminasminerales':
          this.DataService.vitaminasmineralesResponse().subscribe((response: Product[]) => {
            this.products = response;
          });
          break;
        case 'quemagrasas':
          this.DataService.quemagrasasResponse().subscribe((response: Product[]) => {
            this.products = response;
          });
          break;
        case 'intraentrenos':
          this.DataService.intraentrenosResponse().subscribe((response: Product[]) => {
            this.products = response;
          });
          break;
        default:
          case 'allproducts':
          break;
      }
    });
  }  

}
