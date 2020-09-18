import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { CardComponent } from './card.component'
import { CollapseComponent } from '../collapse/collapse.component'
import { GameCarouselComponent } from '../game-carousel/game-carousel.component'
import { InfoPaneComponent } from '../info-pane/info-pane.component'



@NgModule({
  declarations: [CardComponent, CollapseComponent, GameCarouselComponent, InfoPaneComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzCollapseModule
  ],
  // exports: [CardComponent]
})
export class CardModule { }
