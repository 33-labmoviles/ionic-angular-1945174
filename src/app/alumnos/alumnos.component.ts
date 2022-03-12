import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

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

}
