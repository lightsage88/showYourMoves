import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseComponent } from './collapse.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';



@NgModule({
  declarations: [CollapseComponent],
  imports: [
    CommonModule,
    NzCollapseModule
  ]
})
export class CollapseModule { }
