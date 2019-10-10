import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { takeWhile } from 'rxjs/operator/takeWhile';
import { takeLast } from 'rxjs/operator/takeLast';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor( private datosService: DatosService) { }

  info: any; 
  $:any;
  name:any;
  nombres:any;
  precios:any;
  tipos:any;
  medidas:any;
  descrip:any;
  img: File = null;
  tipe: string;


  /*data = {
    nombre: "",
    categoria: [],
    tipo: "",
    precioUnitario: 0,(
    unidadDeMedida: "",
    descripcion: "",
  }*/

  getSelectedItem(value: string){
    this.tipe = value;
  }

  onNameKeyUp (event:any){
    this.name= event.target.value;
    console.log(event.target.value);
    var lower = this.name.toLowerCase();
    this.datosService.navBarCategorias(lower);
  }

  clear(){
    document.getElementById("tagPost").setAttribute("value", "");
    document.getElementById("categoria").setAttribute("value", "");
  }

  enviarForm(){
    let data = new FormData();
    let nombre = document.getElementById('nombre').getAttribute("value");
    let categoria = document.getElementById("categoria").getAttribute("value");
    let tipo =  this.tipe;
    let precioUnitario = document.getElementById("precioUnitario").getAttribute("value");
    let unidadDeMedida = document.getElementById("unidadDeMedida").getAttribute("value");
    let descripcion = document.getElementById("textArea").getAttribute("value");

    data.append('nombre', nombre);
    data.append('categoria',categoria);
    data.append('tipo',tipo);
    data.append('precioUnitario',precioUnitario);
    data.append('unidadDeMedida', unidadDeMedida);
    data.append('descripcion',descripcion);
    data.append('image', this.img);

    //const selectedFile = document.getElementById("upload").f

    /*
    this.data.nombre=document.getElementById('nombre').getAttribute("value");
    var aux= document.getElementById("categoria").getAttribute("value");
    var split= aux.split(",");
    this.data.categoria = split;
    this.data.tipo= document.getElementById("tipo").getAttribute("value");
    var x= parseInt(document.getElementById("precioUnitario").getAttribute("value"));
    this.data.precioUnitario= x;
    this.data.unidadDeMedida=document.getElementById("unidadDeMedida").getAttribute("value");
    this.data.descripcion=document.getElementById("textArea").getAttribute("value");
    */

    //console.log(this.data);
    if(nombre!=""){
      if(categoria!=""){
        if(precioUnitario!=""){
          if(unidadDeMedida!=""){
            if(descripcion!=""){
              this.datosService.updateData(data, tipo);
            }else{
              alert("El campo descripción está vacío");
            }
          }else{
            alert("El campo unidad de medida está vacío");
          }
        }else{
          alert("El campo precio está vacío");
        }
      }else{
        alert("El campo categoría está vacío");
      }
    }else{
      alert("El campo nombre está vacío");
    }

    /*let headers = new Headers();

        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post(`https://mrbuilder.herokuapp.com/api/rubro`, this.data, options)
            .map(res => res.json())
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )*/
  }

  onFileSelected(event){
    this.img = <File> event.target.files[0];
  }

  nombre(event:any){
    this.nombres= event.target.value;
    document.getElementById("nombre").setAttribute("value", this.nombres);
  }

  precio (event:any){
    this.precios= event.target.value;
    document.getElementById("precioUnitario").setAttribute("value", this.precios);
  }

  /*
  tipoDisena (){
    this.tipe= "disena";
    console.log(this.tipe);
  }
  tipoCons (){
    this.tipe= "construye";
  }
  tipoRe (){
    this.tipe= "repara";
  }*/

  medida (event:any){
    this.medidas= event.target.value;
    document.getElementById("unidadDeMedida").setAttribute("value", this.medidas);
  }

  descripcion (event:any){
    this.descrip= event.target.value;
    document.getElementById("textArea").setAttribute("value", this.descrip);
  }

  cambiarPag(){
    window.history.pushState(null, "", "relleno");
      window.location.reload();
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
