import { Component, OnInit } from '@angular/core';
import { DatosService } from 'app/datos.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(private datosService:DatosService) { }

  name:any;
  nombres:any;

  enviarForm(data){
    //var datos = new FormData();
    console.log(data.form._value);
    var info= data.form._value;
    this.datosService.updateCategoria(info);
  
  }
  

  onNameKeyUp (event:any){
    this.name= event.target.value;
    console.log(event.target.value);
    var lower = this.name.toLowerCase();
    this.datosService.navBarCategoriasPut(lower);
  }

  onNameKeyUp2(event:any){
    this.name= event.target.value;
    console.log(event.target.value);
    var lower = this.name.toLowerCase();
    this.datosService.navBarCategoriasPutRe(lower);
  }

  enviarForm2(){
    var rubro = document.getElementById("categoria").getAttribute("value");
    var nombre= document.getElementById("tagPost2").getAttribute("value").toLowerCase();
    var data= {nombre};
    console.log(nombre);
    this.datosService.changeCat(data, rubro);
  }

  enviarForm3(){
    var rubro = document.getElementById("categoria2").getAttribute("value");
    this.datosService.delateCat(rubro);
  }

  nombre(event:any){
    this.nombres= event.target.value;
    document.getElementById("tagPost2").setAttribute("value", this.nombres);
  }

  ngOnInit() {
    if(localStorage.getItem("token")){
      this.datosService.navBarCategoriasInit();
    }else{
      alert("Inicie Sesión Primero");
      window.history.pushState(null, "", "/");
      window.location.reload();
    }
  }

}
