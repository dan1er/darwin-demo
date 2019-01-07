import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

const modules = [
  CommonModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class CustomMaterialModule {}
