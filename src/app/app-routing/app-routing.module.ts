import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisenaComponent } from '../disena/disena.component';
import { ConstruyeComponent } from '../construye/construye.component';
import { ReparaComponent } from '../repara/repara.component';
import { RouterModule, Routes } from '@angular/router';
import { RellenoComponent } from '../relleno/relleno.component';
import { ItemComponent } from '../item/item.component';
import { InicioComponent } from '../inicio/inicio.component';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { CategoriaComponent } from '../categoria/categoria.component';

const routes: Routes = [
  {path: 'relleno', component: RellenoComponent },
  {path: 'construye', component: ConstruyeComponent},
  {path: 'disena', component: DisenaComponent },
  {path: 'repara', component: ReparaComponent },
  {path: 'nuevo', component: ItemComponent},
  {path: 'categoria', component: CategoriaComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
