import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BoardComponent } from './board.component'
import { CardComponent } from '../card/card.component'

@NgModule({
  declarations: [BoardComponent, CardComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzLayoutModule
  ]
})
export class BoardModule { }
