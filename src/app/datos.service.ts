import { Injectable, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';
import { ANY_STATE } from '@angular/core/src/animation/animation_constants';
import { TouchSequence } from 'selenium-webdriver';
import { DELEGATE_CTOR } from '@angular/core/src/reflection/reflection_capabilities';
import { setBindingDebugInfo } from '@angular/core/src/linker/view_utils';

@Injectable()
export class DatosService {


    constructor(private httpService: HttpService) { }

    abcedario: string[]= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

    dataUser= [];

    found:boolean= false;

    start: number=0;


    sendId (a:string):any{
        let id= a;
        return id;
    }

    crearTablaConstruye () {
        this.start = 0;
        this.httpService.getDatos1(this.start)
		 .subscribe(
            (datos: Response) => {
                let aux: any []= [];
                for (let key in datos){
                    aux.push(datos[key]);
                }

                this.dataUser=aux[1];
                console.log(this.dataUser);

                let n: number = this.dataUser.length-1;
                var tabla = document.getElementById('ingresar');
                tabla.innerHTML="";

                //for( let x:number = 0; x<27; x++){
                    for (let i:number = 0; i<=n; i++) {
                        //if(this.abcedario[x].charAt(0)== this.dataUser[i].nombre.charAt(0)){
                            var todo = this.dataUser;
                            var tabla = document.getElementById('ingresar');
                            var img= this.dataUser[i].img;
                            // createElement
                            var elementTr = document.createElement('tr');
                            // createTextNode
                            var elementTd1 = document.createElement('td');
                            var elementTd2 = document.createElement('td');
                            var elementTd3 = document.createElement('td');
                            var elementTd4 = document.createElement('td');
                            var elementTd5 = document.createElement('td');
                            var elementTd6 = document.createElement('td');
                            var elementImg = document.createElement('button');
                            var elementDel = document.createElement('button');
                            var elementIe  = document.createElement("img");
                            var elementId  = document.createElement("img");
                            elementId.src="https://res.cloudinary.com/indev/image/upload/v1570207106/Assets/cross-delete-or-close-circular-button-interface-symbol_ikqw9f.png"
                            elementIe.src="https://res.cloudinary.com/indev/image/upload/v1569604471/Assets/pencil-striped-symbol-for-interface-edit-buttons_ybubbt.png"
                            elementImg.type= "button";
                            elementDel.type= "button";
                            elementId.style.width= "70%";
                            elementIe.style.width= "70%";
                            elementImg.style.width= "30%";
                            elementDel.style.width= "30%";
                            elementDel.style.borderRadius= "5px";
                            elementDel.style.padding= "1px 1px";
                            elementImg.style.marginRight= "5px";
                            elementImg.style.display= "inline"
                            elementImg.className= "btn btn-primary";
                            elementImg.setAttribute("data-target", "#itemModal");
                            elementImg.setAttribute("data-toggle", "modal");
                            elementDel.setAttribute("data-target", "#delateModal");
                            elementDel.setAttribute("data-toggle", "modal");
                            elementImg.setAttribute("target", "_blank");
                            elementTd6.style.padding = "8px";
                            elementImg.style.backgroundColor="#FFC800";
                            elementImg.style.color="black";
                            elementDel.style.backgroundColor="#FFC800";
                            elementDel.style.color="black";
                            elementDel.style.border="solid 1px black"
                            elementTd6.style.width="200px";
                            let itemId = this.dataUser[i]._id;
                            // createTextNode
                            var textNode1 = document.createTextNode(this.dataUser[i].nombre);
                            var textNode2 = document.createTextNode(this.dataUser[i].unidadDeMedida);
                            var textNode3 = document.createTextNode(this.dataUser[i].precioUnitario);
                            var textNode4 = document.createTextNode(this.dataUser[i].descripcion);
                            var textNode5 = document.createElement('a');
                            textNode5.setAttribute("target", "_blank");

                            var link=document.createTextNode("Imagen");
                            
                            if(img){
                                textNode5.setAttribute("href", img);
                            }

     
                            elementTr.appendChild(elementTd1);
                            elementTr.appendChild(elementTd2);
                            elementTr.appendChild(elementTd3);
                            elementTr.appendChild(elementTd4);
                            elementTr.appendChild(elementTd5);
                            elementTr.appendChild(elementTd6);
                            elementTd1.appendChild(textNode1);
                            elementTd2.appendChild(textNode2);
                            elementTd3.appendChild(textNode3);
                            elementTd4.appendChild(textNode4);
                            elementTd5.appendChild(textNode5);
                            textNode5.appendChild(link);
                            elementTd6.appendChild(elementImg);
                            elementTd6.appendChild(elementDel);
                            elementImg.appendChild(elementIe);
                            elementDel.appendChild(elementId);
                            tabla.appendChild(elementTr);

                            elementImg.onclick= function(){
                                document.getElementById("nombre").setAttribute("value", todo[i].nombre);
                                document.getElementById("unidadDeMedida").setAttribute("value", todo[i].unidadDeMedida);
                                document.getElementById("precioUnitario").setAttribute("value", todo[i].precioUnitario);
                                document.getElementById("textArea").setAttribute("value", todo[i].descripcion);
                                document.getElementById("categoria").setAttribute("value", todo[i].categoria[0]._id);
                                document.getElementById("tagPost").setAttribute("value", todo[i].categoria[0].nombre);
                                document.getElementById("imagenAc").innerHTML=todo[i].img;
                                document.getElementById("imagenAc").setAttribute("href", todo[i].img);
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                            }
                            elementDel.onclick= function(){
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                                document.getElementById("dialogoBorrar").innerHTML="Está seguro que desea borrar el rubro: "+todo[i].nombre;
                            }
                            //}
                        }
                    //}
                }
            )
    }


    crearTablaConstruyeMas () {
        console.log(this.start);
        this.start= this.start + 20;
        this.httpService.getDatos1(this.start)
		 .subscribe(
            (datos: Response) => {
                let aux: any []= [];
                for (let key in datos){
                    aux.push(datos[key]);
                }

                this.dataUser=aux[1];
                console.log(this.dataUser);

                let n: number = this.dataUser.length-1;
                var tabla = document.getElementById('ingresar');
                tabla.innerHTML="";

                //for( let x:number = 0; x<27; x++){
                    for (let i:number = 0; i<=n; i++) {
                        //if(this.abcedario[x].charAt(0)== this.dataUser[i].nombre.charAt(0)){
                            var todo = this.dataUser;
                            var tabla = document.getElementById('ingresar');
                            var img= this.dataUser[i].img;
                            // createElement
                            var elementTr = document.createElement('tr');
                            // createTextNode
                            var elementTd1 = document.createElement('td');
                            var elementTd2 = document.createElement('td');
                            var elementTd3 = document.createElement('td');
                            var elementTd4 = document.createElement('td');
                            var elementTd5 = document.createElement('td');
                            var elementTd6 = document.createElement('td');
                            var elementImg = document.createElement('button');
                            var elementDel = document.createElement('button');
                            var elementIe  = document.createElement("img");
                            var elementId  = document.createElement("img");
                            elementId.src="https://res.cloudinary.com/indev/image/upload/v1570207106/Assets/cross-delete-or-close-circular-button-interface-symbol_ikqw9f.png"
                            elementIe.src="https://res.cloudinary.com/indev/image/upload/v1569604471/Assets/pencil-striped-symbol-for-interface-edit-buttons_ybubbt.png"
                            elementImg.type= "button";
                            elementDel.type= "button";
                            elementId.style.width= "70%";
                            elementIe.style.width= "70%";
                            elementImg.style.width= "30%";
                            elementDel.style.width= "30%";
                            elementDel.style.borderRadius= "5px";
                            elementDel.style.padding= "1px 1px";
                            elementImg.style.marginRight= "5px";
                            elementImg.style.display= "inline"
                            elementImg.className= "btn btn-primary";
                            elementImg.setAttribute("data-target", "#itemModal");
                            elementImg.setAttribute("data-toggle", "modal");
                            elementDel.setAttribute("data-target", "#delateModal");
                            elementDel.setAttribute("data-toggle", "modal");
                            elementTd6.style.padding = "8px";
                            elementImg.style.backgroundColor="#FFC800";
                            elementImg.style.color="black";
                            elementDel.style.backgroundColor="#FFC800";
                            elementDel.style.color="black";
                            elementDel.style.border="solid 1px black"
                            elementTd6.style.width="200px";
                            let itemId = this.dataUser[i]._id;
                            // createTextNode
                            var textNode1 = document.createTextNode(this.dataUser[i].nombre);
                            var textNode2 = document.createTextNode(this.dataUser[i].unidadDeMedida);
                            var textNode3 = document.createTextNode(this.dataUser[i].precioUnitario);
                            var textNode4 = document.createTextNode(this.dataUser[i].descripcion);
                            var textNode5 = document.createElement('a');
                            textNode5.setAttribute("target", "_blank");

                            var link=document.createTextNode("Imagen");
                            if(img){
                                textNode5.setAttribute("href", img);
                            }

     
                            elementTr.appendChild(elementTd1);
                            elementTr.appendChild(elementTd2);
                            elementTr.appendChild(elementTd3);
                            elementTr.appendChild(elementTd4);
                            elementTr.appendChild(elementTd5);
                            elementTr.appendChild(elementTd6);
                            elementTd1.appendChild(textNode1);
                            elementTd2.appendChild(textNode2);
                            elementTd3.appendChild(textNode3);
                            elementTd4.appendChild(textNode4);
                            elementTd5.appendChild(textNode5);
                            textNode5.appendChild(link);
                            elementTd6.appendChild(elementImg);
                            elementTd6.appendChild(elementDel);
                            elementImg.appendChild(elementIe);
                            elementDel.appendChild(elementId);
                            tabla.appendChild(elementTr);

                            elementImg.onclick= function(){
                                document.getElementById("nombre").setAttribute("value", todo[i].nombre);
                                document.getElementById("unidadDeMedida").setAttribute("value", todo[i].unidadDeMedida);
                                document.getElementById("precioUnitario").setAttribute("value", todo[i].precioUnitario);
                                document.getElementById("textArea").setAttribute("value", todo[i].descripcion);
                                document.getElementById("categoria").setAttribute("value", todo[i].categoria[0]._id);
                                document.getElementById("tagPost").setAttribute("value", todo[i].categoria[0].nombre);
                                document.getElementById("imagenAc").innerHTML=todo[i].img;
                                document.getElementById("imagenAc").setAttribute("href", todo[i].img);
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                            }
                            elementDel.onclick= function(){
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                                document.getElementById("dialogoBorrar").innerHTML="Está seguro que desea borrar el rubro: "+todo[i].nombre;
                            }
                            //}
                        }
                    //}
                }
            )
        
    }

    crearTablaConstruyeMenos () {
        console.log(this.start);
        if(this.start > 0){
            this.start= this.start - 20;
        }
        this.httpService.getDatos1(this.start)
		 .subscribe(
            (datos: Response) => {
                let aux: any []= [];
                for (let key in datos){
                    aux.push(datos[key]);
                }

                this.dataUser=aux[1];
                console.log(this.dataUser);

                let n: number = this.dataUser.length-1;
                var tabla = document.getElementById('ingresar');
                tabla.innerHTML="";

                //for( let x:number = 0; x<27; x++){
                    for (let i:number = 0; i<=n; i++) {
                        //if(this.abcedario[x].charAt(0)== this.dataUser[i].nombre.charAt(0)){
                            var todo = this.dataUser;
                            var tabla = document.getElementById('ingresar');
                            var img= this.dataUser[i].img;
                            // createElement
                            var elementTr = document.createElement('tr');
                            // createTextNode
                            var elementTd1 = document.createElement('td');
                            var elementTd2 = document.createElement('td');
                            var elementTd3 = document.createElement('td');
                            var elementTd4 = document.createElement('td');
                            var elementTd5 = document.createElement('td');
                            var elementTd6 = document.createElement('td');
                            var elementImg = document.createElement('button');
                            var elementDel = document.createElement('button');
                            var elementIe  = document.createElement("img");
                            var elementId  = document.createElement("img");
                            elementId.src="https://res.cloudinary.com/indev/image/upload/v1570207106/Assets/cross-delete-or-close-circular-button-interface-symbol_ikqw9f.png"
                            elementIe.src="https://res.cloudinary.com/indev/image/upload/v1569604471/Assets/pencil-striped-symbol-for-interface-edit-buttons_ybubbt.png"
                            elementImg.type= "button";
                            elementDel.type= "button";
                            elementId.style.width= "70%";
                            elementIe.style.width= "70%";
                            elementImg.style.width= "30%";
                            elementDel.style.width= "30%";
                            elementDel.style.borderRadius= "5px";
                            elementDel.style.padding= "1px 1px";
                            elementImg.style.marginRight= "5px";
                            elementImg.style.display= "inline"
                            elementImg.className= "btn btn-primary";
                            elementImg.setAttribute("data-target", "#itemModal");
                            elementImg.setAttribute("data-toggle", "modal");
                            elementDel.setAttribute("data-target", "#delateModal");
                            elementDel.setAttribute("data-toggle", "modal");
                            elementTd6.style.padding = "8px";
                            elementImg.style.backgroundColor="#FFC800";
                            elementImg.style.color="black";
                            elementDel.style.backgroundColor="#FFC800";
                            elementDel.style.color="black";
                            elementDel.style.border="solid 1px black"
                            elementTd6.style.width="200px";
                            let itemId = this.dataUser[i]._id;
                            // createTextNode
                            var textNode1 = document.createTextNode(this.dataUser[i].nombre);
                            var textNode2 = document.createTextNode(this.dataUser[i].unidadDeMedida);
                            var textNode3 = document.createTextNode(this.dataUser[i].precioUnitario);
                            var textNode4 = document.createTextNode(this.dataUser[i].descripcion);
                            var textNode5 = document.createElement('a');
                            textNode5.setAttribute("target", "_blank");

                            var link=document.createTextNode("Imagen");
                            if(img){
                                textNode5.setAttribute("href", img);
                            }

     
                            elementTr.appendChild(elementTd1);
                            elementTr.appendChild(elementTd2);
                            elementTr.appendChild(elementTd3);
                            elementTr.appendChild(elementTd4);
                            elementTr.appendChild(elementTd5);
                            elementTr.appendChild(elementTd6);
                            elementTd1.appendChild(textNode1);
                            elementTd2.appendChild(textNode2);
                            elementTd3.appendChild(textNode3);
                            elementTd4.appendChild(textNode4);
                            elementTd5.appendChild(textNode5);
                            textNode5.appendChild(link);
                            elementTd6.appendChild(elementImg);
                            elementTd6.appendChild(elementDel);
                            elementImg.appendChild(elementIe);
                            elementDel.appendChild(elementId);
                            tabla.appendChild(elementTr);
                            //console.log(x);

                            elementImg.onclick= function(){
                                document.getElementById("nombre").setAttribute("value", todo[i].nombre);
                                document.getElementById("unidadDeMedida").setAttribute("value", todo[i].unidadDeMedida);
                                document.getElementById("precioUnitario").setAttribute("value", todo[i].precioUnitario);
                                document.getElementById("textArea").setAttribute("value", todo[i].descripcion);
                                document.getElementById("categoria").setAttribute("value", todo[i].categoria[0]._id);
                                document.getElementById("tagPost").setAttribute("value", todo[i].categoria[0].nombre);
                                document.getElementById("imagenAc").innerHTML=todo[i].img;
                                document.getElementById("imagenAc").setAttribute("href", todo[i].img);
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                            }
                            elementDel.onclick= function(){
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                                document.getElementById("dialogoBorrar").innerHTML="Está seguro que desea borrar el rubro: "+todo[i].nombre;
                            }
                            //}
                        }
                    //}
                }
            )
    }

    busquedaConstruye (name:any){
        this.httpService.busquedaConstruye()
		 .subscribe(
            (datos: Response) => {
                let aux: any []= [];
                for (let key in datos){
                    aux.push(datos[key]);
                }
                this.dataUser=aux[1];
                console.log(this.dataUser);     
        
        let n: number = this.dataUser.length-1;
        let v: number = name.length-1;
        let z: number = name.length-2;
        var tabla = document.getElementById('ingresar');
        tabla.innerHTML="";
        
            for (let i:number = 0; i<=n; i++) {
                if(name.charAt(0) == this.dataUser[i].nombre.charAt(0)){
                        if(name.charAt(v) == this.dataUser[i].nombre.charAt(v)){
                            if(name.charAt(z) == this.dataUser[i].nombre.charAt(z)){
                                // createElement
                                var todo = this.dataUser;
                                var tabla = document.getElementById('ingresar');
                                var img= this.dataUser[i].img;
                                // createElement
                                var elementTr = document.createElement('tr');
                                // createTextNode
                                var elementTd1 = document.createElement('td');
                                var elementTd2 = document.createElement('td');
                                var elementTd3 = document.createElement('td');
                                var elementTd4 = document.createElement('td');
                                var elementTd5 = document.createElement('td');
                                var elementTd6 = document.createElement('td');
                                var elementImg = document.createElement('button');
                                var elementDel = document.createElement('button');
                                var elementIe  = document.createElement("img");
                                var elementId  = document.createElement("img");
                                elementId.src="https://res.cloudinary.com/indev/image/upload/v1570207106/Assets/cross-delete-or-close-circular-button-interface-symbol_ikqw9f.png"
                                elementIe.src="https://res.cloudinary.com/indev/image/upload/v1569604471/Assets/pencil-striped-symbol-for-interface-edit-buttons_ybubbt.png"
                                elementImg.type= "button";
                                elementDel.type= "button";
                                elementId.style.width= "70%";
                                elementIe.style.width= "70%";
                                elementImg.style.width= "30%";
                                elementDel.style.width= "30%";
                                elementDel.style.borderRadius= "5px";
                                elementDel.style.padding= "1px 1px";
                                elementImg.style.marginRight= "5px";
                                elementImg.style.display= "inline"
                                elementImg.className= "btn btn-primary";
                                elementImg.setAttribute("data-target", "#itemModal");
                                elementImg.setAttribute("data-toggle", "modal");
                                elementDel.setAttribute("data-target", "#delateModal");
                                elementDel.setAttribute("data-toggle", "modal");
                                elementTd6.style.padding = "8px";
                                elementImg.style.backgroundColor="#FFC800";
                                elementImg.style.color="black";
                                elementDel.style.backgroundColor="#FFC800";
                                elementDel.style.color="black";
                                elementDel.style.border="solid 1px black"
                                elementTd6.style.width="200px";
                                let itemId = this.dataUser[i]._id;
                                // createTextNode
                                var textNode1 = document.createTextNode(this.dataUser[i].nombre);
                                var textNode2 = document.createTextNode(this.dataUser[i].unidadDeMedida);
                                var textNode3 = document.createTextNode(this.dataUser[i].precioUnitario);
                                var textNode4 = document.createTextNode(this.dataUser[i].descripcion);
                                var textNode5 = document.createElement('a');
                                textNode5.setAttribute("target", "_blank");
    
                                var link=document.createTextNode("Imagen");
                                if(img){
                                    textNode5.setAttribute("href", img);
                                }
    
         
                                elementTr.appendChild(elementTd1);
                                elementTr.appendChild(elementTd2);
                                elementTr.appendChild(elementTd3);
                                elementTr.appendChild(elementTd4);
                                elementTr.appendChild(elementTd5);
                                elementTr.appendChild(elementTd6);
                                elementTd1.appendChild(textNode1);
                                elementTd2.appendChild(textNode2);
                                elementTd3.appendChild(textNode3);
                                elementTd4.appendChild(textNode4);
                                elementTd5.appendChild(textNode5);
                                textNode5.appendChild(link);
                                elementTd6.appendChild(elementImg);
                                elementTd6.appendChild(elementDel);
                                elementImg.appendChild(elementIe);
                                elementDel.appendChild(elementId);
                                tabla.appendChild(elementTr);
    
                                elementImg.onclick= function(){
                                    document.getElementById("nombre").setAttribute("value", todo[i].nombre);
                                    document.getElementById("unidadDeMedida").setAttribute("value", todo[i].unidadDeMedida);
                                    document.getElementById("precioUnitario").setAttribute("value", todo[i].precioUnitario);
                                    document.getElementById("textArea").setAttribute("value", todo[i].descripcion);
                                    document.getElementById("categoria").setAttribute("value", todo[i].categoria[0]._id);
                                    document.getElementById("tagPost").setAttribute("value", todo[i].categoria[0].nombre);
                                    document.getElementById("imagenAc").innerHTML=todo[i].img;
                                    document.getElementById("imagenAc").setAttribute("href", todo[i].img);
                                    document.getElementById("id").setAttribute("value", todo[i]._id);
                                }
                                elementDel.onclick= function(){
                                    document.getElementById("id").setAttribute("value", todo[i]._id);
                                    document.getElementById("dialogoBorrar").innerHTML="Está seguro que desea borrar el rubro: "+todo[i].nombre;
                                }
                            }
                        }
                }
            }
        }
        )    
    }

    crearTablaDisena () {
        this.start = 0;
        this.httpService.getDatos(this.start)
		 .subscribe(
            (datos: Response) => {
                let aux: any []= [];
                for (let key in datos){
                    aux.push(datos[key]);
                }

                this.dataUser=aux[1];
                console.log(this.dataUser);

                let n: number = this.dataUser.length-1;
                var tabla = document.getElementById('ingresar');
                tabla.innerHTML="";

                //for( let x:number = 0; x<27; x++){
                    for (let i:number = 0; i<=n; i++) {
                        //if(this.abcedario[x].charAt(0)== this.dataUser[i].nombre.charAt(0)){
                            var todo = this.dataUser;
                            var tabla = document.getElementById('ingresar');
                            var img= this.dataUser[i].img;
                            // createElement
                            var elementTr = document.createElement('tr');
                            // createTextNode
                            var elementTd1 = document.createElement('td');
                            var elementTd2 = document.createElement('td');
                            var elementTd3 = document.createElement('td');
                            var elementTd4 = document.createElement('td');
                            var elementTd5 = document.createElement('td');
                            var elementTd6 = document.createElement('td');
                            var elementImg = document.createElement('button');
                            var elementDel = document.createElement('button');
                            var elementIe  = document.createElement("img");
                            var elementId  = document.createElement("img");
                            elementId.src="https://res.cloudinary.com/indev/image/upload/v1570207106/Assets/cross-delete-or-close-circular-button-interface-symbol_ikqw9f.png"
                            elementIe.src="https://res.cloudinary.com/indev/image/upload/v1569604471/Assets/pencil-striped-symbol-for-interface-edit-buttons_ybubbt.png"
                            elementImg.type= "button";
                            elementDel.type= "button";
                            elementId.style.width= "70%";
                            elementIe.style.width= "70%";
                            elementImg.style.width= "30%";
                            elementDel.style.width= "30%";
                            elementDel.style.borderRadius= "5px";
                            elementDel.style.padding= "1px 1px";
                            elementImg.style.marginRight= "5px";
                            elementImg.style.display= "inline"
                            elementImg.className= "btn btn-primary";
                            elementImg.setAttribute("data-target", "#itemModal");
                            elementImg.setAttribute("data-toggle", "modal");
                            elementDel.setAttribute("data-target", "#delateModal");
                            elementDel.setAttribute("data-toggle", "modal");
                            elementTd6.style.padding = "8px";
                            elementImg.style.backgroundColor="#FFC800";
                            elementImg.style.color="black";
                            elementDel.style.backgroundColor="#FFC800";
                            elementDel.style.color="black";
                            elementDel.style.border="solid 1px black"
                            elementTd6.style.width="200px";
                            let itemId = this.dataUser[i]._id;
                            // createTextNode
                            var textNode1 = document.createTextNode(this.dataUser[i].nombre);
                            var textNode2 = document.createTextNode(this.dataUser[i].unidadDeMedida);
                            var textNode3 = document.createTextNode(this.dataUser[i].precioUnitario);
                            var textNode4 = document.createTextNode(this.dataUser[i].descripcion);
                            var textNode5 = document.createElement('a');
                            textNode5.setAttribute("target", "_blank");

                            var link=document.createTextNode("Imagen");
                            if(img){
                                textNode5.setAttribute("href", img);
                            }

     
                            elementTr.appendChild(elementTd1);
                            elementTr.appendChild(elementTd2);
                            elementTr.appendChild(elementTd3);
                            elementTr.appendChild(elementTd4);
                            elementTr.appendChild(elementTd5);
                            elementTr.appendChild(elementTd6);
                            elementTd1.appendChild(textNode1);
                            elementTd2.appendChild(textNode2);
                            elementTd3.appendChild(textNode3);
                            elementTd4.appendChild(textNode4);
                            elementTd5.appendChild(textNode5);
                            textNode5.appendChild(link);
                            elementTd6.appendChild(elementImg);
                            elementTd6.appendChild(elementDel);
                            elementImg.appendChild(elementIe);
                            elementDel.appendChild(elementId);
                            tabla.appendChild(elementTr);
                            //console.log(x);

                            elementImg.onclick= function(){
                                document.getElementById("nombre").setAttribute("value", todo[i].nombre);
                                document.getElementById("unidadDeMedida").setAttribute("value", todo[i].unidadDeMedida);
                                document.getElementById("precioUnitario").setAttribute("value", todo[i].precioUnitario);
                                document.getElementById("textArea").setAttribute("value", todo[i].descripcion);
                                document.getElementById("categoria").setAttribute("value", todo[i].categoria[0]._id);
                                document.getElementById("tagPost").setAttribute("value", todo[i].categoria[0].nombre);
                                document.getElementById("imagenAc").innerHTML=todo[i].img;
                                document.getElementById("imagenAc").setAttribute("href", todo[i].img);
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                            }
                            elementDel.onclick= function(){
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                                document.getElementById("dialogoBorrar").innerHTML="Está seguro que desea borrar el rubro: "+todo[i].nombre;
                            }
                            //}
                        }
                    //}
                }
            )   
    }


    crearTablaDisenaMas () {
        this.start= this.start + 20;
        this.httpService.getDatos(this.start)
		 .subscribe(
            (datos: Response) => {
                let aux: any []= [];
                for (let key in datos){
                    aux.push(datos[key]);
                }

                this.dataUser=aux[1];
                console.log(this.dataUser);

                let n: number = this.dataUser.length-1;
                var tabla = document.getElementById('ingresar');
                tabla.innerHTML="";

                //for( let x:number = 0; x<27; x++){
                    for (let i:number = 0; i<=n; i++) {
                  //      if(this.abcedario[x].charAt(0)== this.dataUser[i].nombre.charAt(0)){
                            var todo = this.dataUser;
                            var tabla = document.getElementById('ingresar');
                            var img= this.dataUser[i].img;
                            // createElement
                            var elementTr = document.createElement('tr');
                            // createTextNode
                            var elementTd1 = document.createElement('td');
                            var elementTd2 = document.createElement('td');
                            var elementTd3 = document.createElement('td');
                            var elementTd4 = document.createElement('td');
                            var elementTd5 = document.createElement('td');
                            var elementTd6 = document.createElement('td');
                            var elementImg = document.createElement('button');
                            var elementDel = document.createElement('button');
                            var elementIe  = document.createElement("img");
                            var elementId  = document.createElement("img");
                            elementId.src="https://res.cloudinary.com/indev/image/upload/v1570207106/Assets/cross-delete-or-close-circular-button-interface-symbol_ikqw9f.png"
                            elementIe.src="https://res.cloudinary.com/indev/image/upload/v1569604471/Assets/pencil-striped-symbol-for-interface-edit-buttons_ybubbt.png"
                            elementImg.type= "button";
                            elementDel.type= "button";
                            elementId.style.width= "70%";
                            elementIe.style.width= "70%";
                            elementImg.style.width= "30%";
                            elementDel.style.width= "30%";
                            elementDel.style.borderRadius= "5px";
                            elementDel.style.padding= "1px 1px";
                            elementImg.style.marginRight= "5px";
                            elementImg.style.display= "inline"
                            elementImg.className= "btn btn-primary";
                            elementImg.setAttribute("data-target", "#itemModal");
                            elementImg.setAttribute("data-toggle", "modal");
                            elementDel.setAttribute("data-target", "#delateModal");
                            elementDel.setAttribute("data-toggle", "modal");
                            elementTd6.style.padding = "8px";
                            elementImg.style.backgroundColor="#FFC800";
                            elementImg.style.color="black";
                            elementDel.style.backgroundColor="#FFC800";
                            elementDel.style.color="black";
                            elementDel.style.border="solid 1px black"
                            elementTd6.style.width="200px";
                            let itemId = this.dataUser[i]._id;
                            // createTextNode
                            var textNode1 = document.createTextNode(this.dataUser[i].nombre);
                            var textNode2 = document.createTextNode(this.dataUser[i].unidadDeMedida);
                            var textNode3 = document.createTextNode(this.dataUser[i].precioUnitario);
                            var textNode4 = document.createTextNode(this.dataUser[i].descripcion);
                            var textNode5 = document.createElement('a');
                            textNode5.setAttribute("target", "_blank");

                            var link=document.createTextNode("Imagen");
                            if(img){
                                textNode5.setAttribute("href", img);
                            }

     
                            elementTr.appendChild(elementTd1);
                            elementTr.appendChild(elementTd2);
                            elementTr.appendChild(elementTd3);
                            elementTr.appendChild(elementTd4);
                            elementTr.appendChild(elementTd5);
                            elementTr.appendChild(elementTd6);
                            elementTd1.appendChild(textNode1);
                            elementTd2.appendChild(textNode2);
                            elementTd3.appendChild(textNode3);
                            elementTd4.appendChild(textNode4);
                            elementTd5.appendChild(textNode5);
                            textNode5.appendChild(link);
                            elementTd6.appendChild(elementImg);
                            elementTd6.appendChild(elementDel);
                            elementImg.appendChild(elementIe);
                            elementDel.appendChild(elementId);
                            tabla.appendChild(elementTr);
                            //console.log(x);

                            elementImg.onclick= function(){
                                document.getElementById("nombre").setAttribute("value", todo[i].nombre);
                                document.getElementById("unidadDeMedida").setAttribute("value", todo[i].unidadDeMedida);
                                document.getElementById("precioUnitario").setAttribute("value", todo[i].precioUnitario);
                                document.getElementById("textArea").setAttribute("value", todo[i].descripcion);
                                document.getElementById("categoria").setAttribute("value", todo[i].categoria[0]._id);
                                document.getElementById("tagPost").setAttribute("value", todo[i].categoria[0].nombre);
                                document.getElementById("imagenAc").innerHTML=todo[i].img;
                                document.getElementById("imagenAc").setAttribute("href", todo[i].img);
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                            }
                            elementDel.onclick= function(){
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                                document.getElementById("dialogoBorrar").innerHTML="Está seguro que desea borrar el rubro: "+todo[i].nombre;
                            }
                            //}
                        }
                    //}
                }
            )   
    }

    crearTablaDisenaMenos () {
        if(this.start > 0){
            this.start= this.start - 20;
        }
        this.httpService.getDatos(this.start)
		 .subscribe(
            (datos: Response) => {
                let aux: any []= [];
                for (let key in datos){
                    aux.push(datos[key]);
                }

                this.dataUser=aux[1];
                console.log(this.dataUser);

                let n: number = this.dataUser.length-1;
                var tabla = document.getElementById('ingresar');
                tabla.innerHTML="";

                //for( let x:number = 0; x<27; x++){
                    for (let i:number = 0; i<=n; i++) {
                        //if(this.abcedario[x].charAt(0)== this.dataUser[i].nombre.charAt(0)){
                            var todo = this.dataUser;
                            var tabla = document.getElementById('ingresar');
                            var img= this.dataUser[i].img;
                            // createElement
                            var elementTr = document.createElement('tr');
                            // createTextNode
                            var elementTd1 = document.createElement('td');
                            var elementTd2 = document.createElement('td');
                            var elementTd3 = document.createElement('td');
                            var elementTd4 = document.createElement('td');
                            var elementTd5 = document.createElement('td');
                            var elementTd6 = document.createElement('td');
                            var elementImg = document.createElement('button');
                            var elementDel = document.createElement('button');
                            var elementIe  = document.createElement("img");
                            var elementId  = document.createElement("img");
                            elementId.src="https://res.cloudinary.com/indev/image/upload/v1570207106/Assets/cross-delete-or-close-circular-button-interface-symbol_ikqw9f.png"
                            elementIe.src="https://res.cloudinary.com/indev/image/upload/v1569604471/Assets/pencil-striped-symbol-for-interface-edit-buttons_ybubbt.png"
                            elementImg.type= "button";
                            elementDel.type= "button";
                            elementId.style.width= "70%";
                            elementIe.style.width= "70%";
                            elementImg.style.width= "30%";
                            elementDel.style.width= "30%";
                            elementDel.style.borderRadius= "5px";
                            elementDel.style.padding= "1px 1px";
                            elementImg.style.marginRight= "5px";
                            elementImg.style.display= "inline"
                            elementImg.className= "btn btn-primary";
                            elementImg.setAttribute("data-target", "#itemModal");
                            elementImg.setAttribute("data-toggle", "modal");
                            elementDel.setAttribute("data-target", "#delateModal");
                            elementDel.setAttribute("data-toggle", "modal");
                            elementTd6.style.padding = "8px";
                            elementImg.style.backgroundColor="#FFC800";
                            elementImg.style.color="black";
                            elementDel.style.backgroundColor="#FFC800";
                            elementDel.style.color="black";
                            elementDel.style.border="solid 1px black"
                            elementTd6.style.width="200px";
                            let itemId = this.dataUser[i]._id;
                            // createTextNode
                            var textNode1 = document.createTextNode(this.dataUser[i].nombre);
                            var textNode2 = document.createTextNode(this.dataUser[i].unidadDeMedida);
                            var textNode3 = document.createTextNode(this.dataUser[i].precioUnitario);
                            var textNode4 = document.createTextNode(this.dataUser[i].descripcion);
                            var textNode5 = document.createElement('a');
                            textNode5.setAttribute("target", "_blank");

                            var link=document.createTextNode("Imagen");
                            if(img){
                                textNode5.setAttribute("href", img);
                            }

     
                            elementTr.appendChild(elementTd1);
                            elementTr.appendChild(elementTd2);
                            elementTr.appendChild(elementTd3);
                            elementTr.appendChild(elementTd4);
                            elementTr.appendChild(elementTd5);
                            elementTr.appendChild(elementTd6);
                            elementTd1.appendChild(textNode1);
                            elementTd2.appendChild(textNode2);
                            elementTd3.appendChild(textNode3);
                            elementTd4.appendChild(textNode4);
                            elementTd5.appendChild(textNode5);
                            textNode5.appendChild(link);
                            elementTd6.appendChild(elementImg);
                            elementTd6.appendChild(elementDel);
                            elementImg.appendChild(elementIe);
                            elementDel.appendChild(elementId);
                            tabla.appendChild(elementTr);
                            //console.log(x);

                            elementImg.onclick= function(){
                                document.getElementById("nombre").setAttribute("value", todo[i].nombre);
                                document.getElementById("unidadDeMedida").setAttribute("value", todo[i].unidadDeMedida);
                                document.getElementById("precioUnitario").setAttribute("value", todo[i].precioUnitario);
                                document.getElementById("textArea").setAttribute("value", todo[i].descripcion);
                                document.getElementById("categoria").setAttribute("value", todo[i].categoria[0]._id);
                                document.getElementById("tagPost").setAttribute("value", todo[i].categoria[0].nombre);
                                document.getElementById("imagenAc").innerHTML=todo[i].img;
                                document.getElementById("imagenAc").setAttribute("href", todo[i].img);
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                            }
                            elementDel.onclick= function(){
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                                document.getElementById("dialogoBorrar").innerHTML="Está seguro que desea borrar el rubro: "+todo[i].nombre;
                            }
                            //}
                        }
                    //}
                }
            )   
    }

    busquedaDisena (name:any){
        this.httpService.busquedaDisena()
		 .subscribe(
            (datos: Response) => {
                let aux: any []= [];
                for (let key in datos){
                    aux.push(datos[key]);
                }
                this.dataUser=aux[1];
                console.log(this.dataUser);
            }
        )
        let n: number = this.dataUser.length-1;
        let v: number = name.length-1;
        let z: number = name.length-2;
        var tabla = document.getElementById('ingresar');
        tabla.innerHTML="";
        
            for (let i:number = 0; i<=n; i++) {
                if(name.charAt(0) == this.dataUser[i].nombre.charAt(0)){
                        if(name.charAt(v) == this.dataUser[i].nombre.charAt(v)){
                            if(name.charAt(z) == this.dataUser[i].nombre.charAt(z)){
                                // createElement
                                var todo = this.dataUser;
                            var tabla = document.getElementById('ingresar');
                            var img= this.dataUser[i].img;
                            // createElement
                            var elementTr = document.createElement('tr');
                            // createTextNode
                            var elementTd1 = document.createElement('td');
                            var elementTd2 = document.createElement('td');
                            var elementTd3 = document.createElement('td');
                            var elementTd4 = document.createElement('td');
                            var elementTd5 = document.createElement('td');
                            var elementTd6 = document.createElement('td');
                            var elementImg = document.createElement('button');
                            var elementDel = document.createElement('button');
                            var elementIe  = document.createElement("img");
                            var elementId  = document.createElement("img");
                            elementId.src="https://res.cloudinary.com/indev/image/upload/v1570207106/Assets/cross-delete-or-close-circular-button-interface-symbol_ikqw9f.png"
                            elementIe.src="https://res.cloudinary.com/indev/image/upload/v1569604471/Assets/pencil-striped-symbol-for-interface-edit-buttons_ybubbt.png"
                            elementImg.type= "button";
                            elementDel.type= "button";
                            elementId.style.width= "70%";
                            elementIe.style.width= "70%";
                            elementImg.style.width= "30%";
                            elementDel.style.width= "30%";textNode5.setAttribute("href", img);
                            elementDel.style.borderRadius= "5px";
                            elementDel.style.padding= "1px 1px";
                            elementImg.style.marginRight= "5px";
                            elementImg.style.display= "inline"
                            elementImg.className= "btn btn-primary";
                            elementImg.setAttribute("data-target", "#itemModal");
                            elementImg.setAttribute("data-toggle", "modal");
                            elementDel.setAttribute("data-target", "#delateModal");
                            elementDel.setAttribute("data-toggle", "modal");
                            elementTd6.style.padding = "8px";
                            elementImg.style.backgroundColor="#FFC800";
                            elementImg.style.color="black";
                            elementDel.style.backgroundColor="#FFC800";
                            elementDel.style.color="black";
                            elementDel.style.border="solid 1px black"
                            elementTd6.style.width="200px";
                            let itemId = this.dataUser[i]._id;
                            // createTextNode
                            var textNode1 = document.createTextNode(this.dataUser[i].nombre);
                            var textNode2 = document.createTextNode(this.dataUser[i].unidadDeMedida);
                            var textNode3 = document.createTextNode(this.dataUser[i].precioUnitario);
                            var textNode4 = document.createTextNode(this.dataUser[i].descripcion);
                            var textNode5 = document.createElement('a');
                            textNode5.setAttribute("target", "_blank");

                            var link=document.createTextNode("Imagen");
                            if(img){
                                textNode5.setAttribute("href", img);
                            }

     
                            elementTr.appendChild(elementTd1);
                            elementTr.appendChild(elementTd2);
                            elementTr.appendChild(elementTd3);
                            elementTr.appendChild(elementTd4);
                            elementTr.appendChild(elementTd5);
                            elementTr.appendChild(elementTd6);
                            elementTd1.appendChild(textNode1);
                            elementTd2.appendChild(textNode2);
                            elementTd3.appendChild(textNode3);
                            elementTd4.appendChild(textNode4);
                            elementTd5.appendChild(textNode5);
                            textNode5.appendChild(link);
                            elementTd6.appendChild(elementImg);
                            elementTd6.appendChild(elementDel);
                            elementImg.appendChild(elementIe);
                            elementDel.appendChild(elementId);
                            tabla.appendChild(elementTr);

                            elementImg.onclick= function(){
                                document.getElementById("nombre").setAttribute("value", todo[i].nombre);
                                document.getElementById("unidadDeMedida").setAttribute("value", todo[i].unidadDeMedida);
                                document.getElementById("precioUnitario").setAttribute("value", todo[i].precioUnitario);
                                document.getElementById("textArea").setAttribute("value", todo[i].descripcion);
                                document.getElementById("categoria").setAttribute("value", todo[i].categoria[0]._id);
                                document.getElementById("tagPost").setAttribute("value", todo[i].categoria[0].nombre);
                                document.getElementById("imagenAc").innerHTML=todo[i].img;
                                document.getElementById("imagenAc").setAttribute("href", todo[i].img);
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                            }
                            elementDel.onclick= function(){
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                                document.getElementById("dialogoBorrar").innerHTML="Está seguro que desea borrar el rubro: "+todo[i].nombre;
                            }
                            }
                        }
                }
            }
    }
    crearTablaReapra () {
        this.start = 0;
        this.httpService.getDatos2(this.start)
		 .subscribe(
            (datos: Response) => {
                let aux: any []= [];
                for (let key in datos){
                    aux.push(datos[key]);
                }

                this.dataUser=aux[1];
                console.log(this.dataUser);

                let n: number = this.dataUser.length-1;
                var tabla = document.getElementById('ingresar');
                tabla.innerHTML="";

                //for( let x:number = 0; x<27; x++){
                    for (let i:number = 0; i<=n; i++) {
                        //if(this.abcedario[x].charAt(0)== this.dataUser[i].nombre.charAt(0)){
                            var todo = this.dataUser;
                            var tabla = document.getElementById('ingresar');
                            var img= this.dataUser[i].img;
                            // createElement
                            var elementTr = document.createElement('tr');
                            // createTextNode
                            var elementTd1 = document.createElement('td');
                            var elementTd2 = document.createElement('td');
                            var elementTd3 = document.createElement('td');
                            var elementTd4 = document.createElement('td');
                            var elementTd5 = document.createElement('td');
                            var elementTd6 = document.createElement('td');
                            var elementImg = document.createElement('button');
                            var elementDel = document.createElement('button');
                            var elementIe  = document.createElement("img");
                            var elementId  = document.createElement("img");
                            elementId.src="https://res.cloudinary.com/indev/image/upload/v1570207106/Assets/cross-delete-or-close-circular-button-interface-symbol_ikqw9f.png"
                            elementIe.src="https://res.cloudinary.com/indev/image/upload/v1569604471/Assets/pencil-striped-symbol-for-interface-edit-buttons_ybubbt.png"
                            elementImg.type= "button";
                            elementDel.type= "button";
                            elementId.style.width= "70%";
                            elementIe.style.width= "70%";
                            elementImg.style.width= "30%";
                            elementDel.style.width= "30%";
                            elementDel.style.borderRadius= "5px";
                            elementDel.style.padding= "1px 1px";
                            elementImg.style.marginRight= "5px";
                            elementImg.style.display= "inline"
                            elementImg.className= "btn btn-primary";
                            elementImg.setAttribute("data-target", "#itemModal");
                            elementImg.setAttribute("data-toggle", "modal");
                            elementDel.setAttribute("data-target", "#delateModal");
                            elementDel.setAttribute("data-toggle", "modal");
                            elementTd6.style.padding = "8px";
                            elementImg.style.backgroundColor="#FFC800";
                            elementImg.style.color="black";
                            elementDel.style.backgroundColor="#FFC800";
                            elementDel.style.color="black";
                            elementDel.style.border="solid 1px black"
                            elementTd6.style.width="200px";
                            let itemId = this.dataUser[i]._id;
                            // createTextNode
                            var textNode1 = document.createTextNode(this.dataUser[i].nombre);
                            var textNode2 = document.createTextNode(this.dataUser[i].unidadDeMedida);
                            var textNode3 = document.createTextNode(this.dataUser[i].precioUnitario);
                            var textNode4 = document.createTextNode(this.dataUser[i].descripcion);
                            var textNode5 = document.createElement('a');
                            textNode5.setAttribute("target", "_blank");

                            var link=document.createTextNode("Imagen");
                            if(img){
                                textNode5.setAttribute("href", img);
                            }

     
                            elementTr.appendChild(elementTd1);
                            elementTr.appendChild(elementTd2);
                            elementTr.appendChild(elementTd3);
                            elementTr.appendChild(elementTd4);
                            elementTr.appendChild(elementTd5);
                            elementTr.appendChild(elementTd6);
                            elementTd1.appendChild(textNode1);
                            elementTd2.appendChild(textNode2);
                            elementTd3.appendChild(textNode3);
                            elementTd4.appendChild(textNode4);
                            elementTd5.appendChild(textNode5);
                            textNode5.appendChild(link);
                            elementTd6.appendChild(elementImg);
                            elementTd6.appendChild(elementDel);
                            elementImg.appendChild(elementIe);
                            elementDel.appendChild(elementId);
                            tabla.appendChild(elementTr);
                            //console.log(x);

                            elementImg.onclick= function(){
                                document.getElementById("nombre").setAttribute("value", todo[i].nombre);
                                document.getElementById("unidadDeMedida").setAttribute("value", todo[i].unidadDeMedida);
                                document.getElementById("precioUnitario").setAttribute("value", todo[i].precioUnitario);
                                document.getElementById("textArea").setAttribute("value", todo[i].descripcion);
                                document.getElementById("categoria").setAttribute("value", todo[i].categoria[0]._id);
                                document.getElementById("tagPost").setAttribute("value", todo[i].categoria[0].nombre);
                                document.getElementById("imagenAc").innerHTML=todo[i].img;
                                document.getElementById("imagenAc").setAttribute("href", todo[i].img);
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                            }
                            elementDel.onclick= function(){
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                                document.getElementById("dialogoBorrar").innerHTML="Está seguro que desea borrar el rubro: "+todo[i].nombre;
                            }
                            //}
                        }
                    //}
                }
            )    
    }


    crearTablaReapraMas () {
        this.start = this.start + 20;
        this.httpService.getDatos2(this.start)
		 .subscribe(
            (datos: Response) => {
                let aux: any []= [];
                for (let key in datos){
                    aux.push(datos[key]);
                }

                this.dataUser=aux[1];
                console.log(this.dataUser);

                let n: number = this.dataUser.length-1;
                var tabla = document.getElementById('ingresar');
                tabla.innerHTML="";

                //for( let x:number = 0; x<27; x++){
                    for (let i:number = 0; i<=n; i++) {
                        //if(this.abcedario[x].charAt(0)== this.dataUser[i].nombre.charAt(0)){
                            var todo = this.dataUser;
                            var tabla = document.getElementById('ingresar');
                            var img= this.dataUser[i].img;
                            // createElement
                            var elementTr = document.createElement('tr');
                            // createTextNode
                            var elementTd1 = document.createElement('td');
                            var elementTd2 = document.createElement('td');
                            var elementTd3 = document.createElement('td');
                            var elementTd4 = document.createElement('td');
                            var elementTd5 = document.createElement('td');
                            var elementTd6 = document.createElement('td');
                            var elementImg = document.createElement('button');
                            var elementDel = document.createElement('button');
                            var elementIe  = document.createElement("img");
                            var elementId  = document.createElement("img");
                            elementId.src="https://res.cloudinary.com/indev/image/upload/v1570207106/Assets/cross-delete-or-close-circular-button-interface-symbol_ikqw9f.png"
                            elementIe.src="https://res.cloudinary.com/indev/image/upload/v1569604471/Assets/pencil-striped-symbol-for-interface-edit-buttons_ybubbt.png"
                            elementImg.type= "button";
                            elementDel.type= "button";
                            elementId.style.width= "70%";
                            elementIe.style.width= "70%";
                            elementImg.style.width= "30%";
                            elementDel.style.width= "30%";
                            elementDel.style.borderRadius= "5px";
                            elementDel.style.padding= "1px 1px";
                            elementImg.style.marginRight= "5px";
                            elementImg.style.display= "inline"
                            elementImg.className= "btn btn-primary";
                            elementImg.setAttribute("data-target", "#itemModal");
                            elementImg.setAttribute("data-toggle", "modal");
                            elementDel.setAttribute("data-target", "#delateModal");
                            elementDel.setAttribute("data-toggle", "modal");
                            elementTd6.style.padding = "8px";
                            elementImg.style.backgroundColor="#FFC800";
                            elementImg.style.color="black";
                            elementDel.style.backgroundColor="#FFC800";
                            elementDel.style.color="black";
                            elementDel.style.border="solid 1px black"
                            elementTd6.style.width="200px";
                            let itemId = this.dataUser[i]._id;
                            // createTextNode
                            var textNode1 = document.createTextNode(this.dataUser[i].nombre);
                            var textNode2 = document.createTextNode(this.dataUser[i].unidadDeMedida);
                            var textNode3 = document.createTextNode(this.dataUser[i].precioUnitario);
                            var textNode4 = document.createTextNode(this.dataUser[i].descripcion);
                            var textNode5 = document.createElement('a');
                            textNode5.setAttribute("target", "_blank");

                            var link=document.createTextNode("Imagen");
                            if(img){
                                textNode5.setAttribute("href", img);
                            }

     
                            elementTr.appendChild(elementTd1);
                            elementTr.appendChild(elementTd2);
                            elementTr.appendChild(elementTd3);
                            elementTr.appendChild(elementTd4);
                            elementTr.appendChild(elementTd5);
                            elementTr.appendChild(elementTd6);
                            elementTd1.appendChild(textNode1);
                            elementTd2.appendChild(textNode2);
                            elementTd3.appendChild(textNode3);
                            elementTd4.appendChild(textNode4);
                            elementTd5.appendChild(textNode5);
                            textNode5.appendChild(link);
                            elementTd6.appendChild(elementImg);
                            elementTd6.appendChild(elementDel);
                            elementImg.appendChild(elementIe);
                            elementDel.appendChild(elementId);
                            tabla.appendChild(elementTr);
                            //console.log(x);

                            elementImg.onclick= function(){
                                document.getElementById("nombre").setAttribute("value", todo[i].nombre);
                                document.getElementById("unidadDeMedida").setAttribute("value", todo[i].unidadDeMedida);
                                document.getElementById("precioUnitario").setAttribute("value", todo[i].precioUnitario);
                                document.getElementById("textArea").setAttribute("value", todo[i].descripcion);
                                document.getElementById("categoria").setAttribute("value", todo[i].categoria[0]._id);
                                document.getElementById("tagPost").setAttribute("value", todo[i].categoria[0].nombre);
                                document.getElementById("imagenAc").innerHTML=todo[i].img;
                                document.getElementById("imagenAc").setAttribute("href", todo[i].img);
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                            }
                            elementDel.onclick= function(){
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                                document.getElementById("dialogoBorrar").innerHTML="Está seguro que desea borrar el rubro: "+todo[i].nombre;
                            }
                            //}
                        }
                    //}
                }
            )
        
    }

    crearTablaReapraMenos () {
        if(this.start > 0){
            this.start= this.start - 20;
        }
        this.httpService.getDatos2(this.start)
		 .subscribe(
            (datos: Response) => {
                let aux: any []= [];
                for (let key in datos){
                    aux.push(datos[key]);
                }

                this.dataUser=aux[1];
                console.log(this.dataUser);

                let n: number = this.dataUser.length-1;
                var tabla = document.getElementById('ingresar');
                tabla.innerHTML="";

                //for( let x:number = 0; x<27; x++){
                    for (let i:number = 0; i<=n; i++) {
                        //if(this.abcedario[x].charAt(0)== this.dataUser[i].nombre.charAt(0)){
                            var todo = this.dataUser;
                            var tabla = document.getElementById('ingresar');
                            var img= this.dataUser[i].img;
                            // createElement
                            var elementTr = document.createElement('tr');
                            // createTextNode
                            var elementTd1 = document.createElement('td');
                            var elementTd2 = document.createElement('td');
                            var elementTd3 = document.createElement('td');
                            var elementTd4 = document.createElement('td');
                            var elementTd5 = document.createElement('td');
                            var elementTd6 = document.createElement('td');
                            var elementImg = document.createElement('button');
                            var elementDel = document.createElement('button');
                            var elementIe  = document.createElement("img");
                            var elementId  = document.createElement("img");
                            elementId.src="https://res.cloudinary.com/indev/image/upload/v1570207106/Assets/cross-delete-or-close-circular-button-interface-symbol_ikqw9f.png"
                            elementIe.src="https://res.cloudinary.com/indev/image/upload/v1569604471/Assets/pencil-striped-symbol-for-interface-edit-buttons_ybubbt.png"
                            elementImg.type= "button";
                            elementDel.type= "button";
                            elementId.style.width= "70%";
                            elementIe.style.width= "70%";
                            elementImg.style.width= "30%";
                            elementDel.style.width= "30%";
                            elementDel.style.borderRadius= "5px";
                            elementDel.style.padding= "1px 1px";
                            elementImg.style.marginRight= "5px";
                            elementImg.style.display= "inline"
                            elementImg.className= "btn btn-primary";
                            elementImg.setAttribute("data-target", "#itemModal");
                            elementImg.setAttribute("data-toggle", "modal");
                            elementDel.setAttribute("data-target", "#delateModal");
                            elementDel.setAttribute("data-toggle", "modal");
                            elementTd6.style.padding = "8px";
                            elementImg.style.backgroundColor="#FFC800";
                            elementImg.style.color="black";
                            elementDel.style.backgroundColor="#FFC800";
                            elementDel.style.color="black";
                            elementDel.style.border="solid 1px black"
                            elementTd6.style.width="200px";
                            let itemId = this.dataUser[i]._id;
                            // createTextNode
                            var textNode1 = document.createTextNode(this.dataUser[i].nombre);
                            var textNode2 = document.createTextNode(this.dataUser[i].unidadDeMedida);
                            var textNode3 = document.createTextNode(this.dataUser[i].precioUnitario);
                            var textNode4 = document.createTextNode(this.dataUser[i].descripcion);
                            var textNode5 = document.createElement('a');
                            textNode5.setAttribute("target", "_blank");

                            var link=document.createTextNode("Imagen");
                            if(img){
                                textNode5.setAttribute("href", img);
                            }

     
                            elementTr.appendChild(elementTd1);
                            elementTr.appendChild(elementTd2);
                            elementTr.appendChild(elementTd3);
                            elementTr.appendChild(elementTd4);
                            elementTr.appendChild(elementTd5);
                            elementTr.appendChild(elementTd6);
                            elementTd1.appendChild(textNode1);
                            elementTd2.appendChild(textNode2);
                            elementTd3.appendChild(textNode3);
                            elementTd4.appendChild(textNode4);
                            elementTd5.appendChild(textNode5);
                            textNode5.appendChild(link);
                            elementTd6.appendChild(elementImg);
                            elementTd6.appendChild(elementDel);
                            elementImg.appendChild(elementIe);
                            elementDel.appendChild(elementId);
                            tabla.appendChild(elementTr);
                            //console.log(x);

                            elementImg.onclick= function(){
                                document.getElementById("nombre").setAttribute("value", todo[i].nombre);
                                document.getElementById("unidadDeMedida").setAttribute("value", todo[i].unidadDeMedida);
                                document.getElementById("precioUnitario").setAttribute("value", todo[i].precioUnitario);
                                document.getElementById("textArea").setAttribute("value", todo[i].descripcion);
                                document.getElementById("categoria").setAttribute("value", todo[i].categoria[0]._id);
                                document.getElementById("tagPost").setAttribute("value", todo[i].categoria[0].nombre);
                                document.getElementById("imagenAc").innerHTML=todo[i].img;
                                document.getElementById("imagenAc").setAttribute("href", todo[i].img);
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                            }
                            elementDel.onclick= function(){
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                                document.getElementById("dialogoBorrar").innerHTML="Está seguro que desea borrar el rubro: "+todo[i].nombre;
                            }
                            //}
                        }
                    //}
                }
            )
    }

    busquedaRepara (name:any){
        this.httpService.busquedaRepara()
		 .subscribe(
            (datos: Response) => {
                let aux: any []= [];
                for (let key in datos){
                    aux.push(datos[key]);
                }
                this.dataUser=aux[1];
                console.log(this.dataUser);
            }
        )
        let n: number = this.dataUser.length-1;
        let v: number = name.length-1;
        let z: number = name.length-2;
        var tabla = document.getElementById('ingresar');
        tabla.innerHTML="";
        
            for (let i:number = 0; i<=n; i++) {
                if(name.charAt(0) == this.dataUser[i].nombre.charAt(0)){
                        if(name.charAt(v) == this.dataUser[i].nombre.charAt(v)){
                            if(name.charAt(z) == this.dataUser[i].nombre.charAt(z)){
                                // createElement
                                var todo = this.dataUser;
                            var tabla = document.getElementById('ingresar');
                            var img= this.dataUser[i].img;
                            // createElement
                            var elementTr = document.createElement('tr');
                            // createTextNode
                            var elementTd1 = document.createElement('td');
                            var elementTd2 = document.createElement('td');
                            var elementTd3 = document.createElement('td');
                            var elementTd4 = document.createElement('td');
                            var elementTd5 = document.createElement('td');
                            var elementTd6 = document.createElement('td');
                            var elementImg = document.createElement('button');
                            var elementDel = document.createElement('button');
                            var elementIe  = document.createElement("img");
                            var elementId  = document.createElement("img");
                            elementId.src="https://res.cloudinary.com/indev/image/upload/v1570207106/Assets/cross-delete-or-close-circular-button-interface-symbol_ikqw9f.png"
                            elementIe.src="https://res.cloudinary.com/indev/image/upload/v1569604471/Assets/pencil-striped-symbol-for-interface-edit-buttons_ybubbt.png"
                            elementImg.type= "button";
                            elementDel.type= "button";
                            elementId.style.width= "70%";
                            elementIe.style.width= "70%";
                            elementImg.style.width= "30%";
                            elementDel.style.width= "30%";
                            elementDel.style.borderRadius= "5px";
                            elementDel.style.padding= "1px 1px";
                            elementImg.style.marginRight= "5px";
                            elementImg.style.display= "inline"
                            elementImg.className= "btn btn-primary";
                            elementImg.setAttribute("data-target", "#itemModal");
                            elementImg.setAttribute("data-toggle", "modal");
                            elementDel.setAttribute("data-target", "#delateModal");
                            elementDel.setAttribute("data-toggle", "modal");
                            elementTd6.style.padding = "8px";
                            elementImg.style.backgroundColor="#FFC800";
                            elementImg.style.color="black";
                            elementDel.style.backgroundColor="#FFC800";
                            elementDel.style.color="black";
                            elementDel.style.border="solid 1px black"
                            elementTd6.style.width="200px";
                            let itemId = this.dataUser[i]._id;
                            // createTextNode
                            var textNode1 = document.createTextNode(this.dataUser[i].nombre);
                            var textNode2 = document.createTextNode(this.dataUser[i].unidadDeMedida);
                            var textNode3 = document.createTextNode(this.dataUser[i].precioUnitario);
                            var textNode4 = document.createTextNode(this.dataUser[i].descripcion);
                            var textNode5 = document.createElement('a');
                            textNode5.setAttribute("target", "_blank");

                            var link=document.createTextNode("Imagen");
                            if(img){
                                textNode5.setAttribute("href", img);
                            }

     
                            elementTr.appendChild(elementTd1);
                            elementTr.appendChild(elementTd2);
                            elementTr.appendChild(elementTd3);
                            elementTr.appendChild(elementTd4);
                            elementTr.appendChild(elementTd5);
                            elementTr.appendChild(elementTd6);
                            elementTd1.appendChild(textNode1);
                            elementTd2.appendChild(textNode2);
                            elementTd3.appendChild(textNode3);
                            elementTd4.appendChild(textNode4);
                            elementTd5.appendChild(textNode5);
                            textNode5.appendChild(link);
                            elementTd6.appendChild(elementImg);
                            elementTd6.appendChild(elementDel);
                            elementImg.appendChild(elementIe);
                            elementDel.appendChild(elementId);
                            tabla.appendChild(elementTr);

                            elementImg.onclick= function(){
                                document.getElementById("nombre").setAttribute("value", todo[i].nombre);
                                document.getElementById("unidadDeMedida").setAttribute("value", todo[i].unidadDeMedida);
                                document.getElementById("precioUnitario").setAttribute("value", todo[i].precioUnitario);
                                document.getElementById("textArea").setAttribute("value", todo[i].descripcion);
                                document.getElementById("categoria").setAttribute("value", todo[i].categoria[0]._id);
                                document.getElementById("tagPost").setAttribute("value", todo[i].categoria[0].nombre);
                                document.getElementById("imagenAc").innerHTML=todo[i].img;
                                document.getElementById("imagenAc").setAttribute("href", todo[i].img);
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                            }
                            elementDel.onclick= function(){
                                document.getElementById("id").setAttribute("value", todo[i]._id);
                                document.getElementById("dialogoBorrar").innerHTML="Está seguro que desea borrar el rubro: "+todo[i].nombre;
                            }
                            }
                        }
                }
            }
            
    }

    navBarCategorias(name:any){
        let n: number = this.dataUser.length-1;
        let v: number = name.length-1;
        let z: number = name.length-2;
        var tabla = document.getElementById('categoriasSelect');
        tabla.innerHTML="";
        
            for (let i:number = 0; i<=n; i++) {
                if(name.charAt(0) == this.dataUser[i].nombre.charAt(0)){
                        if(name.charAt(v) == this.dataUser[i].nombre.charAt(v)){
                            if(name.charAt(z) == this.dataUser[i].nombre.charAt(z)){
                                let nombre= this.dataUser[i].nombre.toUpperCase();
                                let idItem = this.dataUser[i]._id;
                                // createElement
                                var elementTag= document.getElementById('tagPost');
                                var elementCat= document.getElementById('categoria');
                                var elementDiv= document.createElement('div');
                                var elementa = document.createElement('a');
                                elementa.className="catButton";
                                elementa.style.marginLeft="50px";
                                elementDiv.style.marginBottom="20px";
                                elementDiv.style.marginTop="20px";
                                elementa.style.color="black";
                                elementDiv.style.borderBottom="solid 1px #CFCFCF";


                                elementDiv.onclick= function (){
                                    if(elementTag.getAttribute("value")==""){
                                        elementTag.setAttribute("value", nombre);
                                        elementCat.setAttribute("value", idItem );
                                    }else{
                                        elementTag.setAttribute("value", elementTag.getAttribute("value")+", "+nombre);
                                        elementCat.setAttribute("value", elementCat.getAttribute("value")+","+idItem);
                                        console.log(elementCat.getAttribute("value"));
                                    }
                                }
                                
                               
                                // createTextNode
                                var textNode1 = document.createTextNode(nombre);  
                                elementDiv.appendChild(elementa);
                                elementa.appendChild(textNode1);
                                tabla.appendChild(elementDiv);
                            }
                        }
                }
            }
        }

        navBarCategoriasPut(name:any){
            let n: number = this.dataUser.length-1;
            let v: number = name.length-1;
            let z: number = name.length-2;
            var tabla = document.getElementById('categoriasSelect');
            tabla.innerHTML="";
            
                for (let i:number = 0; i<=n; i++) {
                    if(name.charAt(0) == this.dataUser[i].nombre.charAt(0)){
                            if(name.charAt(v) == this.dataUser[i].nombre.charAt(v)){
                                if(name.charAt(z) == this.dataUser[i].nombre.charAt(z)){
                                    let nombre= this.dataUser[i].nombre.toUpperCase();
                                    let idItem = this.dataUser[i]._id;
                                    // createElement
                                    var elementTag= document.getElementById('tagPost');
                                    var elementCat= document.getElementById('categoria');
                                    var elementDiv= document.createElement('div');
                                    var elementa = document.createElement('a');
                                    elementa.className="catButton";
                                    elementa.style.marginLeft="50px";
                                    elementDiv.style.marginBottom="20px";
                                    elementDiv.style.marginTop="20px";
                                    elementa.style.color="black";
                                    elementDiv.style.borderBottom="solid 1px #CFCFCF";
    
    
                                    elementDiv.onclick= function (){
                                            elementTag.setAttribute("value", nombre);
                                            elementCat.setAttribute("value", idItem );
                                    }
                                    
                                   
                                    // createTextNode
                                    var textNode1 = document.createTextNode(nombre);  
                                    elementDiv.appendChild(elementa);
                                    elementa.appendChild(textNode1);
                                    tabla.appendChild(elementDiv);
                                }
                            }
                    }
                }
            }

            navBarCategoriasPutRe(name:any){
                let n: number = this.dataUser.length-1;
                let v: number = name.length-1;
                let z: number = name.length-2;
                var tabla = document.getElementById('categoriasSelect2');
                tabla.innerHTML="";
                
                    for (let i:number = 0; i<=n; i++) {
                        if(name.charAt(0) == this.dataUser[i].nombre.charAt(0)){
                                if(name.charAt(v) == this.dataUser[i].nombre.charAt(v)){
                                    if(name.charAt(z) == this.dataUser[i].nombre.charAt(z)){
                                        let nombre= this.dataUser[i].nombre.toUpperCase();
                                        let idItem = this.dataUser[i]._id;
                                        // createElement
                                        var elementTag= document.getElementById('tagPost3');
                                        var elementCat= document.getElementById('categoria2');
                                        var elementDiv= document.createElement('div');
                                        var elementa = document.createElement('a');
                                        elementa.className="catButton";
                                        elementa.style.marginLeft="50px";
                                        elementDiv.style.marginBottom="20px";
                                        elementDiv.style.marginTop="20px";
                                        elementa.style.color="black";
                                        elementDiv.style.borderBottom="solid 1px #CFCFCF";
        
        
                                        elementDiv.onclick= function (){
                                                elementTag.setAttribute("value", nombre);
                                                elementCat.setAttribute("value", idItem );
                                        }
                                        
                                       
                                        // createTextNode
                                        var textNode1 = document.createTextNode(nombre);  
                                        elementDiv.appendChild(elementa);
                                        elementa.appendChild(textNode1);
                                        tabla.appendChild(elementDiv);
                                    }
                                }
                        }
                    }
                }

    navBarCategoriasInit(){
        this.httpService.categorias()
		 .subscribe(
            (datos: Response) => {
                let aux: any []= [];
                for (let key in datos){
                    aux.push(datos[key]);
                }
                this.dataUser=aux[1];
                console.log(this.dataUser);
        }
    )
    }

    updateData(data:any, tipe){
        console.log(data);
        this.httpService.agregarRubro(data)
        .subscribe(res => {alert("Rubro Agregado Correctamente"),
                            window.history.pushState(null, '', tipe);
                            window.location.reload();
                            },
                   err => alert(JSON.parse(err._body).err.message)
        )
    }

    changeData(data:any, rubro){
        console.log(data);
        this.httpService.cambiarRubro(data, rubro)
        .subscribe(
            res => {alert("Rubro Actualizado Correctamente"),
            window.location.reload();
            }
            )
    }

    changeCat(data:any, rubro){
        console.log(data);
        this.httpService.cambiarCategoria(data, rubro)
        .subscribe(
            res => {alert("Categoria Actualizada Correctamente"),
            window.location.reload();
            }
            )
    }

    delateData(data:any){
        this.httpService.deleteRubro(data)
        .subscribe(res => {alert("Rubro Eliminado Correctamente"),
        window.location.reload();
        })
    }

    delateCat(data:any){
        this.httpService.deleteCat(data)
        .subscribe(res => {alert("Categoria Eliminada Correctamente"),
        window.location.reload();
        })
    }

    login(data:any){
        console.log(data);
        this.httpService.login(data)
        .subscribe(res => {localStorage.setItem("token", res.token);
                            window.history.pushState(null, '', 'relleno');
                            window.location.reload();
                        },
                   err => alert(JSON.parse(err._body).err.message)
        )
    }

    updateCategoria(data:any){
        console.log(data);
        this.httpService.agregarCategoria(data)
        .subscribe(res => {alert("Categoria Agregada Correctamente"),
                   window.location.reload();
                   },
                   err => alert(JSON.parse(err._body).err.message)
        )
    }
}
