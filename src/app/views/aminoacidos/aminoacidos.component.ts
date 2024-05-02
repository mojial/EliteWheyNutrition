import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-aminoacidos',
    standalone: true,
    templateUrl: './aminoacidos.component.html',
    styleUrl: './aminoacidos.component.css',
    imports: [CardComponent]
})
export class AminoacidosComponent {

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
