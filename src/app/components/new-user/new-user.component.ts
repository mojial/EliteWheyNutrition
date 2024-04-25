import { Component, OnInit } from '@angular/core';
import { FormsFooterComponent } from "../forms-footer/forms-footer.component";
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-user',
    standalone: true,
    templateUrl: './new-user.component.html',
    styleUrl: './new-user.component.css',
    imports: [FormsFooterComponent, FormsModule, ReactiveFormsModule]
})
export class NewUserComponent implements OnInit {

    formReg: FormGroup;

    constructor( private userService: UserService, private router: Router) {
        this.formReg = new FormGroup({
            email: new FormControl(''),
            password: new FormControl('')
        })
    }

    ngOnInit():void {
    }

    onSubmit(){
        this.userService.register(this.formReg.value)
        .then(response => {
            console.log(response);
            this.router.navigate(['/login']);
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
