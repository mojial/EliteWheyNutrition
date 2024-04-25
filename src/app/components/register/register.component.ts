import { Component } from '@angular/core';
import { FormsFooterComponent } from "../forms-footer/forms-footer.component";

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
    imports: [FormsFooterComponent]
})
export class RegisterComponent {

}
