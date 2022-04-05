import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.getAlumnos();

  }

  alumnos: any = [];

  getAlumnos(): any {

    this.http.get('https://ionic-angular-1945174-default-rtdb.firebaseio.com/alumnos.json').subscribe(res => {
      this.alumnos = res;

    })

  }
  
}
