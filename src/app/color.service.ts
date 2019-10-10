import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {
  color1 () {
    document.getElementById('disena').style.backgroundColor="white";
    document.getElementById('construye').style.backgroundColor="#FFC800";
    document.getElementById('repara').style.backgroundColor="#FFC800";
    document.getElementById("boton1").style.backgroundColor="#FFC800";
    document.getElementById("boton2").style.backgroundColor="#FFC800";
  }
  color2 () {
    document.getElementById('disena').style.backgroundColor="#FFC800";
    document.getElementById('construye').style.backgroundColor="white";
    document.getElementById('repara').style.backgroundColor="#FFC800";
    document.getElementById("boton1").style.backgroundColor="#FFC800";
    document.getElementById("boton2").style.backgroundColor="#FFC800";
  }
  color4 () {
    document.getElementById('disena').style.backgroundColor="#FFC800";
    document.getElementById('construye').style.backgroundColor="#FFC800";
    document.getElementById('repara').style.backgroundColor="white";
    document.getElementById("boton1").style.backgroundColor="#FFC800";
    document.getElementById("boton2").style.backgroundColor="#FFC800";
  }
  color5 () {
    document.getElementById('disena').style.backgroundColor="#FFC800";
    document.getElementById('construye').style.backgroundColor="#FFC800";
    document.getElementById('repara').style.backgroundColor="#FFC800";
    document.getElementById("boton1").style.backgroundColor="white";
    document.getElementById("boton2").style.backgroundColor="#FFC800";
  }

  color3 () {
    document.getElementById('disena').style.backgroundColor="#FFC800";
    document.getElementById('construye').style.backgroundColor="#FFC800";
    document.getElementById('repara').style.backgroundColor="#FFC800";
    document.getElementById("boton1").style.backgroundColor="#FFC800";
    document.getElementById("boton2").style.backgroundColor="white";
  }
}
