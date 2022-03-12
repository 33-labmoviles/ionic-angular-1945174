import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosComponent } from '../alumnos/alumnos.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  declarations: [AlumnosComponent],
  exports: [AlumnosComponent]
})
export class AlumnosComponentModule {}