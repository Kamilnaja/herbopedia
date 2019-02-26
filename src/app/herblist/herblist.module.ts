import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerblistComponent } from './herblist.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'app/filter/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    HerblistComponent,
    FilterPipe
  ],
  exports: [
    HerblistComponent
  ]
})
export class HerblistModule { }
