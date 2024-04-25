import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
    selector: 'app-allproducts',
    standalone: true,
    templateUrl: './allproducts.component.html',
    styleUrl: './allproducts.component.css',
    imports: [CardComponent]
})
export class AllproductsComponent {

}
