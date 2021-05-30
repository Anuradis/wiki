import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatSlideToggleModule
  ],
  exports: [
    MatFormFieldModule,
    MatIconModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
