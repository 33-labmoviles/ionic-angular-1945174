import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss'],
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit() {

    this.obtenerDetalleAlumno(this.matricula);
    
  }

  alumnos = [

    {
    
      "nombre": "Julio",
      "apellido": "Luevano",
      "matricula": "1945174",
      "foto": "/assets/icon/Teams1.jpg"
    
    },

    {
    
      "nombre": "Manuel",
      "apellido": "Rivera",
      "matricula": "4715491",
      "foto": "/assets/icon/Teams1.jpg"

    },

    {
    
      "nombre": "NOMBRE_1",
      "apellido": "APELLIDO_1",
      "matricula": "MATRICULA_1",
      "foto": "/assets/icon/FCFM.jpg"

    },

    {
    
      "nombre": "NOMBRE_2",
      "apellido": "APELLIDO_2",
      "matricula": "MATRICULA_2",
      "foto": "/assets/icon/FCFM.jpg"
    
    },

    {
    
      "nombre": "NOMBRE_3",
      "apellido": "APELLIDO_3",
      "matricula": "MATRICULA_3",
      "foto": "/assets/icon/FCFM.jpg"
    
    },

    {
    
      "nombre": "Eso Tilin",
      "apellido": "Vamos Tilin",
      "matricula": "WOW TILIN",
      "foto": "/assets/icon/Tilin.jpg"
    
    }

  ];
  
  alumnoDetalle: any = {};
  matricula: string = this.ruta.snapshot.params.id;

  obtenerDetalleAlumno(matricula: string): any{

    console.log(matricula);

    for(let i = 0; i < this.alumnos.length; i++){

      if(matricula == this.alumnos[i].matricula){

        this.alumnoDetalle = i;

      }

    }

    return this.alumnoDetalle;

  }

}