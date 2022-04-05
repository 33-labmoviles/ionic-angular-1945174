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
  };

  ngOnInit(): void {
    
    this.getAlumnos();
    
  }

  alumnos: any = [];

  getAlumnos(): any {

    return this.http.get('https://ionic-angular-1945174-default-rtdb.firebaseio.com/alumnos.json').subscribe(res =>{
      this.alumnos = res;
    })

  }

}
