import { Component } from '@angular/core';
import { Product } from "../../interfaces/product";
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  products!: Product[];
  constructor(private DataService: DataService) {}

  ngOnInit() {
    this.DataService.getElitewheyUrlReponse().subscribe((response: Product[]) => {
      this.products = response;
    })
  }

}
