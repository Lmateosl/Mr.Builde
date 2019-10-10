import { Component, OnInit } from '@angular/core';
import { DatosService } from 'app/datos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private datosService:DatosService) { }

  name:any;
  clave:any;
  
  datos={
    email: "",
    password: ""
    }

  reload(){
    window.location.reload();
  }
  
  enviarForm(data){
    //var datos = new FormData();
    console.log(data.form._value);
    var info= data.form._value;
    if(info.checkbox == true){
      localStorage.setItem("user", info.usuario);
    }
    this.datos.email= info.usuario;
    this.datos.password = info.clave;
    //datos.append("email", info.usuario);
    //datos.append("password", info.clave);
    this.datosService.login(this.datos);
  }

  enviarForm2(event:any){
    var info= event.target.value;
    document.getElementById('inputPassword2').setAttribute("value", info);
  }

  submit(){
    //var datos = new FormData();
    var userr = document.getElementById('staticEmail2').getAttribute("value");
    var key = document.getElementById('inputPassword2').getAttribute("value");

    this.datos.email= userr;
    this.datos.password = key;
    //datos.append("email", info.usuario
    //datos.append("email", userr);
    //datos.append("password", key);

    this.datosService.login(this.datos);
  }

  ngOnInit() {
    if(localStorage.getItem("user")){
      document.getElementById("formulario2").removeAttribute("hidden");
      document.getElementById("formulario").setAttribute("hidden", "");
      document.getElementById("staticEmail2").setAttribute("value", localStorage.getItem("user"));
      document.getElementById("emailCh").onclick= function(){
        document.getElementById("formulario").removeAttribute("hidden");
        document.getElementById("formulario2").setAttribute("hidden", "");
        localStorage.removeItem("user");
      }
    }
  }

}
