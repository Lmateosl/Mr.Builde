import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-construye',
  templateUrl: './construye.component.html',
  styleUrls: ['./construye.component.css']
})
export class ConstruyeComponent implements OnInit {

  constructor(private datosService: DatosService) { }

  name:any;
  info:any;

  onNameKeyUp (event:any){
    this.name= event.target.value;
    console.log(event.target.value);
  }

  busqueda (){
    this.datosService.busquedaConstruye(this.name);
  }

  mas(){
    this.datosService.crearTablaConstruyeMas();
    console.log("hola");
  }


  menos(){
    this.datosService.crearTablaConstruyeMenos();
    console.log("hola");
  }


  $:any;
  names:any;
  nombres:any;
  precios:any;
  tipos:any;
  medidas:any;
  descrip:any;
  img: File = null;
  tipe: string= "construye";


  /*data = {
    nombre: "",
    categoria: [],
    tipo: "",
    precioUnitario: 0,
    unidadDeMedida: "",
    descripcion: "",
  }*/

  

  onCatKeyUp (event:any){
    this.names= event.target.value;
    console.log(event.target.value);
    var lower = this.names.toLowerCase();
    this.datosService.navBarCategorias(lower);
  }

  clear(){
    document.getElementById("tagPost").setAttribute("value", "");
    document.getElementById("categoria").setAttribute("value", "");
  }
  
  cambiarPag(){
    window.history.pushState(null, "", "relleno");
      window.location.reload();
  }

  enviarFormCat(){
    let data = new FormData();
    let nombre = document.getElementById('nombre').getAttribute("value");
    let categoria = document.getElementById("categoria").getAttribute("value");
    let tipo =  this.tipe;
    let precioUnitario = document.getElementById("precioUnitario").getAttribute("value");
    let unidadDeMedida = document.getElementById("unidadDeMedida").getAttribute("value");
    let descripcion = document.getElementById("textArea").getAttribute("value");
    let id = document.getElementById("id").getAttribute("value");

    console.table(categoria);
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
              this.datosService.changeData(data, id);
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

  tipoDisena (){
    this.tipe= "disena";
    console.log(this.tipe);
  }
  tipoCons (){
    this.tipe= "construye";
  }
  tipoRe (){
    this.tipe= "repara";
  }

  medida (event:any){
    this.medidas= event.target.value;
    document.getElementById("unidadDeMedida").setAttribute("value", this.medidas);
  }

  descripcion (event:any){
    this.descrip= event.target.value;
    document.getElementById("textArea").setAttribute("value", this.descrip);
  }

  dataCategorias (){
    this.datosService.navBarCategoriasInit();
  }

  unHidde(){
    document.getElementById("upload").hidden=false;
    document.getElementById("imagenAc").hidden=true;
    document.getElementById("x").hidden=true;
  }

  delate (){
    let id = document.getElementById("id").getAttribute("value");
    this.datosService.delateData(id);
  }

  getSelectedItem(value: string){
    this.tipe = value;
  }

  ngOnInit() {
    if(localStorage.getItem("token")){
      this.datosService.crearTablaConstruye();
      this.datosService.navBarCategoriasInit();
      this.tipe= "construye";
    }else{
      alert("Inicie Sesión Primero");
      window.history.pushState(null, "", "/");
      window.location.reload();
    }
  }
}
