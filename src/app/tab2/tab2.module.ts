import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AlumnosComponentModule } from '../alumnos/alumnos.component.module';
import { AlumnoDetalleComponentModule } from '../alumno-detalle/alumno-detalle.component.module';
import { Tab2PageRoutingModule } from './tab2-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    AlumnosComponentModule,
    AlumnoDetalleComponentModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
