import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relleno',
  templateUrl: './relleno.component.html',
  styleUrls: ['./relleno.component.css']
})
export class RellenoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem("token")){
    }else{
      alert("Inicie Sesíon Primero");
      window.history.pushState(null, "", "/");
      window.location.reload();
    }
  }

}
