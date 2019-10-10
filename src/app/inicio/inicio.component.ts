import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [ColorService],
})
export class InicioComponent implements OnInit {

  constructor(private colorService: ColorService, private datosService: DatosService) {}

  usuarios:any;

  cambiarColor1 (){
    this.colorService.color1();
  }
  cambiarColor2 (){
    this.colorService.color2();
  }
  cambiarColor3 (){
    this.colorService.color3();
  }
  cambiarColor4 (){
    this.colorService.color4();
  }
  cambiarColor5 (){
    this.colorService.color5();
  }


  ngOnInit() {
   var url= window.location.href.split("/");
   var tipo = url[url.length-1];
   if(tipo == "repara"){
    this.colorService.color4();
   }else if(tipo == "disena"){
    this.colorService.color1();
   }else if(tipo == "construye"){
    this.colorService.color2();
   }else if(tipo == "nuevo"){
    this.colorService.color5();
   }else if(tipo == "categoria"){
    this.colorService.color3();
   }
  
  }
}
