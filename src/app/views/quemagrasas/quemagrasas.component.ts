import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-quemagrasas',
    standalone: true,
    templateUrl: './quemagrasas.component.html',
    styleUrl: './quemagrasas.component.css',
    imports: [CardComponent]
})
export class QuemagrasasComponent {

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
