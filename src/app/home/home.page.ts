import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public geolocation:Geolocation) {}

  solicitar(){
    this.geolocationNative();
  }

  geolocationNative(){
    this.geolocation.getCurrentPosition().then((geposition: Geoposition)=>{
      console.log(geposition);
      console.log("longitud: ",geposition.coords.latitude,"--latitud: ",geposition.coords.longitude);
      
    })
  }

}
