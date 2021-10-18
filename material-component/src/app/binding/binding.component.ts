import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  urlPath = "";
  nombre = "Alejandro";

  constructor() { }

  ngOnInit(): void {
  }

  getUrlPath(photo: string){
    if(photo == 'Ronaldo'){
      return 'https://estaticos-cdn.sport.es/clip/57b4defe-a487-4d9d-a9d5-4034b12575dc_alta-libre-aspect-ratio_default_0.jpg';
    }
    else{
      return 'https://imagenes.elpais.com/resizer/D1eYUUEfyOIXlXnix3cXUCSGZF8=/980x735/filters:focal(1745x609:1755x619)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/7G364PMCSFGIHFZNHHJLNQL4SU.jpg';
    }
  }

}
