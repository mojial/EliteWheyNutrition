import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ProductsComponent } from './components/products/products.component';
import { AllproductsComponent } from './views/allproducts/allproducts.component';
import { CardComponent } from './components/card/card.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { CreatineComponent } from './views/creatine/creatine.component';
import { IntraentrenosComponent } from './views/intraentrenos/intraentrenos.component';
import { QuemagrasasComponent } from './views/quemagrasas/quemagrasas.component';
import { VitaminasmineralesComponent } from './views/vitaminasminerales/vitaminasminerales.component';
import { BarritasComponent } from './views/barritas/barritas.component';
import { ControldepesoComponent } from './views/controldepeso/controldepeso.component';
import { PreentrenosComponent } from './views/preentrenos/preentrenos.component';
import { HidratosComponent } from './views/hidratos/hidratos.component';
import { AminoacidosComponent } from './views/aminoacidos/aminoacidos.component';
import { ProteinaComponent } from './views/proteina/proteina.component';

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
    { path: 'cart', component: CardComponent},
    { path: 'creatine', component: CreatineComponent},
    { path: 'proteina', component: ProteinaComponent},
    { path: 'aminoacidos', component: AminoacidosComponent},
    { path: 'hidratos', component: HidratosComponent},
    { path: 'preentrenos', component: PreentrenosComponent},
    { path: 'controldepeso', component: ControldepesoComponent},
    { path: 'barritas', component: BarritasComponent},
    { path: 'vitaminasminerales', component: VitaminasmineralesComponent},
    { path: 'quemagrasas', component: QuemagrasasComponent},
    { path: 'intraentrenos', component: IntraentrenosComponent}

];
