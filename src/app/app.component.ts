import { Component, OnInit } from '@angular/core';
import { DisenaComponent } from './disena/disena.component';
import { ConstruyeComponent } from './construye/construye.component';
import { ReparaComponent } from './repara/repara.component';
import { FotComponent } from './fot/fot.component';
import { ItemComponent } from './item/item.component';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  hidde(event:any){
    if(localStorage.getItem("token")){
      document.getElementById("barras").setAttribute("hidden", "");
      document.getElementById("inicioApp").removeAttribute("hidden");
      document.getElementById("centro").removeAttribute("hidden");
    }else {
      document.getElementById("inicioApp").setAttribute("hidden", "");
      document.getElementById("barras").removeAttribute("hidden");
      document.getElementById("centro").setAttribute("hidden", "");
    }
  }

  ngOnInit(){
    if(localStorage.getItem("token")){
      document.getElementById("barras").setAttribute("hidden", "");
      document.getElementById("inicioApp").removeAttribute("hidden");
      document.getElementById("centro").removeAttribute("hidden");
    }else {
      document.getElementById("inicioApp").setAttribute("hidden", "");
      document.getElementById("barras").removeAttribute("hidden");
      document.getElementById("centro").setAttribute("hidden", "");
    }
  }
}
