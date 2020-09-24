import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { GameCarouselComponent } from '../game-carousel/game-carousel.component'


@NgModule({
  declarations: [ GameCarouselComponent ],
  imports: [
    CommonModule,
    NzCarouselModule
  ]
})
export class GameCarouselModule { }
