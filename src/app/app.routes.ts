import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ProductsComponent } from './components/products/products.component';
import { AllproductsComponent } from './views/allproducts/allproducts.component';
import { CardComponent } from './components/card/card.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { 
        path: 'home',
         component: MainComponent, 
         ...canActivate(() => redirectUnauthorizedTo(['/register']))
    },
    { path: 'login', component: RegisterComponent },
    { path: 'register', component: NewUserComponent },
    { path: 'products', component: ProductsComponent},
    { path: 'allproducts', component: AllproductsComponent},
    { path: 'cart', component: CardComponent}
];
