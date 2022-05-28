import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnChanges, OnInit{

  constructor(private http: HttpClient) {}

  //changes: SimpleChanges

  ngOnChanges(): void {
    console.log("vista cambiada");
    this.getAlumnos();
  };

  ngOnInit(): void {
    
    this.getAlumnos();
    
  }

  alumnos: any = [];

  getAlumnos(): any {
    
    return this.http.get('https://ionic-angular-1945174-default-rtdb.firebaseio.com/alumnos.json').subscribe(res =>{
    
      for(let x = 0; x < Object.keys(res).length; x++){

       if(res[Object.keys(res)[x]] != null){

        this.alumnos.push(res[Object.keys(res)[x]]);  

       }  

      }

    })

  }
  
}
