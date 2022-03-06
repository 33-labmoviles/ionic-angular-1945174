import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnChanges{

  constructor() {}

  //changes: SimpleChanges

  ngOnChanges(): void {
    console.log("vista cambiada");
  };

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

  @Input() nombre: String = "";
  @Input() apellido: String = "";
  @Input() matricula: String = "";


  agregarAlumno(): void{

    var nuevoAlumno: any = {

      "nombre": this.nombre,
      "apellido": this.apellido,
      "matricula": this.matricula


    };

    this.alumnos.push(nuevoAlumno);

    console.log(this.alumnos);

  }

}
