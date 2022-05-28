import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss'],
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private actionSheetController: ActionSheetController, private http: HttpClient) { }

  ngOnInit() {

    this.obtenerAlumnos(this.matricula);
    
  }

  alumnos: any = []
  alumno: any = []
  alumnoDetalle: any = {};
  matricula: string = this.ruta.snapshot.params.id;

  obtenerAlumnos(matricula: any): any{

    this.http.get('https://ionic-angular-1945174-default-rtdb.firebaseio.com/alumnos.json').subscribe(res => {
      for(let x = 0; x < Object.keys(res).length; x++){

        this.alumnos.push(res[Object.keys(res)[x]]);    

      }

      for(let i = 0; i < this.alumnos.length; i++){

        if(matricula == this.alumnos[i].matricula){
  
          this.alumnoDetalle = i;
  
        }
  
      }
      
      this.alumno = this.alumnos[this.alumnoDetalle]

    })

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Modificar',
        icon: 'create',
        data: 10,
        handler: () => {
          console.log('create clicked');
        }
      }, {
        text: 'Me encanta',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cerrar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}