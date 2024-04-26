import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RegisterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

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
