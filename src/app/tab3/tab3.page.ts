import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import { NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{

  constructor(private http: HttpClient) {}

  nombre: string = "";
  apellido: string = "";
  matricula: string = "";
  
  onSubmit(agregarAlumno: NgForm) {

    console.log("Form Exitoso");

    this.alumno = {
      "nombre": this.nombre,
      "apellido": this.apellido,
      "matricula": this.matricula
    };

    this.putAlumnos(this.alumno);

  }

  alumno: any = {};

  putAlumnos(alumno: any): any{

    this.http.post('https://ionic-angular-1945174-default-rtdb.firebaseio.com/alumnos.json', alumno).subscribe(res =>{
      console.log("Alumno Guardado");
    })

  }

}