import { Component, OnInit } from '@angular/core';
import { FormsFooterComponent } from "../forms-footer/forms-footer.component";
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
    imports: [FormsFooterComponent, FormsModule, ReactiveFormsModule]
})
export class RegisterComponent implements OnInit{

    formLogin: FormGroup;

    constructor( private userService: UserService, private router: Router) {
        this.formLogin = new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        })
    }

    ngOnInit():void {
    }

    onSubmit(){
        this.userService.login(this.formLogin.value)
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log(error));
    }

    onClick(){
        this.userService.loginWithGoogle()
        .then( response => {
            console.log(response);
            this.router.navigate(['/home']);
        })
        .catch(error => console.log(error));
    }
}
