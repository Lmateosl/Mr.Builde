import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { letProto } from 'rxjs/operator/let';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class HttpService {

	constructor(private http : Http) { }
	
	httpOptions = {
    headers: new Headers({
	  'Content-Type': 'application/json',
	  'Accept' : 'application/json',
	  'Authorization': localStorage.getItem("token"),
	}),
	headers2: new Headers({
		'Authorization': localStorage.getItem("token"),
	})
  }
	  
  	url: string = "https://mrbuilder.herokuapp.com/api/";
	limite:number = 20;
	
  getDatos(inicio: number){
		return this.http.get(`https://mrbuilder.herokuapp.com/api/rubros/tipo/disena?desde=${inicio}&limite=${this.limite}`, {headers: this.httpOptions.headers2})
		  .map((response: Response)=> response.json())
	}

	getDatos1(inicio: number){
			return this.http.get(`https://mrbuilder.herokuapp.com/api/rubros/tipo/construye?desde=${inicio}&limite=${this.limite}`, {headers: this.httpOptions.headers2})
			 .map((response: Response)=> response.json())
	}

	getDatos2(inicio:number){
		return this.http.get(`https://mrbuilder.herokuapp.com/api/rubros/tipo/repara?desde=${inicio}&limite=${this.limite}`, {headers: this.httpOptions.headers2})
		  .map((response: Response)=> response.json())
	}

	busquedaConstruye(){
		return this.http.get('https://mrbuilder.herokuapp.com/api/rubros', {headers: this.httpOptions.headers2})
		  .map((response: Response)=> response.json())
	}

	busquedaDisena(){
		return this.http.get('https://mrbuilder.herokuapp.com/api/rubros', {headers: this.httpOptions.headers2})
		  .map((response: Response)=> response.json())
	}

	busquedaRepara(){
		return this.http.get('https://mrbuilder.herokuapp.com/api/rubros', {headers: this.httpOptions.headers2})
		  .map((response: Response)=> response.json())
	}

	sendDatos(usuario){
		return this.http.post('https://mrbuilder.herokuapp.com/api/rubro', usuario, {headers: this.httpOptions.headers})
		  .map((response: Response)=> response.json());
	}

	agregarRubro(data){
		return this.http.post(this.url+'rubro',data, {headers: this.httpOptions.headers2})
		.map((res : Response) => res.json());
	}

	categorias(){
		return this.http.get(`https://mrbuilder.herokuapp.com/api/categorias`, {headers: this.httpOptions.headers2})
		  .map((response: Response)=> response.json())
	}

	cambiarRubro(data, rubro){
		return this.http.put(this.url+'rubro/'+rubro,data, {headers: this.httpOptions.headers2})
		.map((res : Response) => res.json());
	}

	cambiarCategoria(data, rubro){
		return this.http.put(this.url+'categoria/'+rubro,data, {headers: this.httpOptions.headers2})
		.map((res : Response) => res.json());
	}

	deleteRubro(rubro){
		return this.http.delete(this.url+'rubro/'+rubro, {headers: this.httpOptions.headers2})
		.map((res : Response) => res.json());
	}

	deleteCat(rubro){
		return this.http.delete(this.url+'categoria/'+rubro, {headers: this.httpOptions.headers2})
		.map((res : Response) => res.json());
	}

	login(data){
		return this.http.post(this.url+'login/', data, {headers: this.httpOptions.headers2})
		.map((res : Response) => res.json());
	}

	agregarCategoria(data){
		return this.http.post(this.url+'categoria',data, {headers: this.httpOptions.headers2})
		.map((res : Response) => res.json());
	}
}
