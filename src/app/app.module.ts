import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { DisenaComponent } from './disena/disena.component';
import { ConstruyeComponent } from './construye/construye.component';
import { ReparaComponent } from './repara/repara.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { FotComponent } from './fot/fot.component';
import { RellenoComponent } from './relleno/relleno.component';
import { ColorService } from './color.service';
import { HttpService } from './http.service';
import { DatosService } from './datos.service';
import { ItemComponent } from './item/item.component';
import { BaraPrinComponent } from './bara-prin/bara-prin.component';
import { LoginComponent } from './login/login.component';
import { CategoriaComponent } from './categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DisenaComponent,
    DisenaComponent,
    ConstruyeComponent,
    ReparaComponent,
    FotComponent,
    RellenoComponent,
    ItemComponent,
    BaraPrinComponent,
    LoginComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ColorService, HttpService, DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
