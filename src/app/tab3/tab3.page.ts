import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import { NgForm } from '@angular/forms';

import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{

  constructor(private http: HttpClient) {}

  public webcamImage: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
   this.trigger.next();
   this.cambio = !this.cambio
  }
  handleImage(webcamImage: WebcamImage): void {
   this.webcamImage = webcamImage;
  }
   
  public get triggerObservable(): Observable<void> {
   return this.trigger.asObservable();
  }
  
  nombre: string = "";
  apellido: string = "";
  matricula: string = "";
  
  cambio = false;
  editando = false;

  onSubmit(agregarAlumno: NgForm) {

    console.log("Form Exitoso");

    this.alumno = {
      "nombre": this.nombre,
      "apellido": this.apellido,
      "matricula": this.matricula.toString(),
      "foto": this.webcamImage.imageAsDataUrl

    };

    this.putAlumnos(this.alumno, this.matricula.toString());

  }
  
  repetido = false;
  alumno: any = [];
  alumnos = "Alumno ingresado exitosamente";

  putAlumnos(alumnoIngreso: any, matricula: any): any{

        this.http.post('https://ionic-angular-1945174-default-rtdb.firebaseio.com/alumnos.json', alumnoIngreso).subscribe(res =>{
          console.log("Alumno Guardado");
        })

  }

}