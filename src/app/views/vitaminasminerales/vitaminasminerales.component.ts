import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-vitaminasminerales',
    standalone: true,
    templateUrl: './vitaminasminerales.component.html',
    styleUrl: './vitaminasminerales.component.css',
    imports: [CardComponent]
})
export class VitaminasmineralesComponent {

    constructor(
        private userService : UserService,
        private router: Router
      ){}
    
      ngOnInit(): void {
        
      }
    
      onClick(){
        this.userService.logout()
        .then(()=>{
          this.router.navigate(['/register']);
        })
        .catch(error => console.log(error));
      }

}
