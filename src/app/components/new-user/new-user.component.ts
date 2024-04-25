import { Component } from '@angular/core';
import { FormsFooterComponent } from "../forms-footer/forms-footer.component";

@Component({
    selector: 'app-new-user',
    standalone: true,
    templateUrl: './new-user.component.html',
    styleUrl: './new-user.component.css',
    imports: [FormsFooterComponent]
})
export class NewUserComponent {

}
