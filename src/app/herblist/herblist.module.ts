import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerblistComponent } from './herblist.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'app/filter/filter.pipe';
import { ModalComponent } from 'app/modal/modal.component';
import { InfoBoxComponent } from 'app/info-box/info-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    HerblistComponent,
    FilterPipe,
    ModalComponent,
    InfoBoxComponent
  ],
  exports: [
    HerblistComponent
  ]
})
export class HerblistModule { }
