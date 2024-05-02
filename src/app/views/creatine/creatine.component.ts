import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-creatine',
    standalone: true,
    templateUrl: './creatine.component.html',
    styleUrl: './creatine.component.css',
    imports: [CardComponent]
})
export class CreatineComponent {

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
