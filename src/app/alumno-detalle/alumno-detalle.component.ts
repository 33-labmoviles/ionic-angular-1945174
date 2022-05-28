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
  id: string;
  foto: any = []

  obtenerAlumnos(matricula: any): any{

    this.http.get('https://ionic-angular-1945174-default-rtdb.firebaseio.com/alumnos.json').subscribe(res => {
      for(let x = 0; x < Object.keys(res).length; x++){

        this.alumnos.push(res[Object.keys(res)[x]]);  

      }

      for(let i = 0; i < this.alumnos.length; i++){

        if(matricula == this.alumnos[i].matricula){
  
          this.alumnoDetalle = i;
          this.id = Object.keys(res).reverse().reverse()[i];
          this.foto = this.alumnos[i];
  
        }
  
      }
      
      this.alumno = this.alumnos[this.alumnoDetalle];

      console.log(this.alumno)
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
          console.log('Eliminar');

          this.http.delete('https://ionic-angular-1945174-default-rtdb.firebaseio.com/alumnos/' + this.id + '.json').subscribe(res => {
            console.log(res)
          })

        }
      }, {
        text: 'Modificar',
        icon: 'create',
        data: 10,
        handler: () => {
          console.log('Modificar');

          this.foto["foto"] = "/assets/icon/alumno.png";

          this.http.put('https://ionic-angular-1945174-default-rtdb.firebaseio.com/alumnos/' + this.id + '.json', this.foto).subscribe(res => {
            console.log(res)
          })

        }
      }, {
        text: 'Cerrar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cerrar');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}