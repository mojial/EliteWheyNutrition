import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
    selector: 'app-allproducts',
    standalone: true,
    templateUrl: './allproducts.component.html',
    styleUrl: './allproducts.component.css',
    imports: [CardComponent]
})
export class AllproductsComponent {
    
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
