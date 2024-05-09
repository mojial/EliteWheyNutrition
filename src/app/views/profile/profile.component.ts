import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  
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

  searchQuery: string = '';
  
  searchCategory() {
    if (this.searchQuery.trim() !== '') {
        let category: string = '';

        switch (true) {
            case this.searchQuery.toLowerCase().includes('proteina') || this.searchQuery.toLowerCase().includes('prote') 
            || this.searchQuery.toLowerCase().includes('whey') 
            || this.searchQuery.toLowerCase().includes('protein'):
                category = 'proteina';
                break;
            case this.searchQuery.toLowerCase().includes('creatine') || this.searchQuery.toLowerCase().includes('creatina')
            || this.searchQuery.toLowerCase().includes('crea')
            || this.searchQuery.toLowerCase().includes('monohidratada'):
                category = 'creatine';
                break;
            case this.searchQuery.toLowerCase().includes('aminoacidos') || this.searchQuery.toLowerCase().includes('amino')
            || this.searchQuery.toLowerCase().includes('amin') || this.searchQuery.toLowerCase().includes('bcaas')
            || this.searchQuery.toLowerCase().includes('bcaa'):
                category = 'aminoacidos';
                break;
            case this.searchQuery.toLowerCase().includes('hidratos') || this.searchQuery.toLowerCase().includes('mass')
            || this.searchQuery.toLowerCase().includes('gainer') || this.searchQuery.toLowerCase().includes('hidra'):
                category = 'hidratos';
                break;
            case this.searchQuery.toLowerCase().includes('preentrenos') || this.searchQuery.toLowerCase().includes('preworkout')
            || this.searchQuery.toLowerCase().includes('pree') || this.searchQuery.toLowerCase().includes('pre') 
            || this.searchQuery.toLowerCase().includes('pre-workout') || this.searchQuery.toLowerCase().includes('prework')
            || this.searchQuery.toLowerCase().includes('work') || this.searchQuery.toLowerCase().includes('entreno'):
                category = 'preentrenos';
                break;
            case this.searchQuery.toLowerCase().includes('controldepeso') || this.searchQuery.toLowerCase().includes('control')
            || this.searchQuery.toLowerCase().includes('mantener') || this.searchQuery.toLowerCase().includes('peso'):
                category = 'controldepeso';
                break;
            case this.searchQuery.toLowerCase().includes('barritas') || this.searchQuery.toLowerCase().includes('barrita')
            || this.searchQuery.toLowerCase().includes('bar') || this.searchQuery.toLowerCase().includes('chocolatina'):
                category = 'barritas';
                break;
            case this.searchQuery.toLowerCase().includes('vitaminasminerales') || this.searchQuery.toLowerCase().includes('vitaminas')
            || this.searchQuery.toLowerCase().includes('minerales') || this.searchQuery.toLowerCase().includes('vitamin')
            || this.searchQuery.toLowerCase().includes('mineral'):
                category = 'vitaminasminerales';
                break;
            case this.searchQuery.toLowerCase().includes('quemagrasas') || this.searchQuery.toLowerCase().includes('quema')
            || this.searchQuery.toLowerCase().includes('grasas') || this.searchQuery.toLowerCase().includes('grasa')
            || this.searchQuery.toLowerCase().includes('burner') || this.searchQuery.toLowerCase().includes('fat burner'):
                category = 'quemagrasas';
                break;
            case this.searchQuery.toLowerCase().includes('intraentrenos') || this.searchQuery.toLowerCase().includes('intra')
            || this.searchQuery.toLowerCase().includes('intra entreno') || this.searchQuery.toLowerCase().includes('intra entrenos'):
                category = 'intraentrenos';
                break;
            default:
                category = '';
                break;
        }

        if (category !== '') {
            this.router.navigate(['/', category]);
        } else {
            this.router.navigate(['/home']);
        }
    }
}
}
