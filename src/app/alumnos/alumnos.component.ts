import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.getAlumnos();

  }

  alumnos: any = [];

  getAlumnos(): any {

    this.http.get('https://ionic-angular-1945174-default-rtdb.firebaseio.com/alumnos.json').subscribe(res => {
      
      for(let x = 0; x < Object.keys(res).length; x++){

        this.alumnos.push(res[Object.keys(res)[x]]);    

      }

    })

  }

}
