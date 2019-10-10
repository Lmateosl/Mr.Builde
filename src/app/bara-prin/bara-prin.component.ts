import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bara-prin',
  templateUrl: './bara-prin.component.html',
  styleUrls: ['./bara-prin.component.css']
})
export class BaraPrinComponent implements OnInit {

  constructor() { }
  
  clear() {
    localStorage.removeItem("token");
    window.history.pushState(null, "", "/");
    window.location.reload();
  }

  ngOnInit() {
    if(localStorage.getItem("token")){
      document.getElementById("botInicio").removeAttribute("hidden");
    }else{
      document.getElementById("botInicio").setAttribute("hidden", "");
    }
  }

}
