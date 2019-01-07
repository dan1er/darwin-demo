import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { CustomInputComponent } from './custom-input/custom-input.component';

const components = [CustomInputComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomMaterialModule
  ],
  declarations: [...components],
  exports: [...components],
  providers: [
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'never' } }
  ]
})
export class SharedModule {}
