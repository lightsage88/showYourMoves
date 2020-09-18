import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { BoardComponent } from './board.component'
import { CardComponent } from '../card/card.component'

@NgModule({
  declarations: [BoardComponent, CardComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzLayoutModule,
    NzDividerModule
  ]
})
export class BoardModule { }
