import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { InfoPaneComponent } from './info-pane.component'




@NgModule({
  declarations: [InfoPaneComponent],
  imports: [
    CommonModule,
    NzTableModule
  ]
})
export class InfoPaneModule { }
