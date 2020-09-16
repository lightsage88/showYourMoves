import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-carousel',
  templateUrl: './game-carousel.component.html',
  styleUrls: ['./game-carousel.component.scss'],
  styles: [
    `
      [nz-carousel-content] {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        color: #fff;
        overflow: hidden;
      }

      h3 {
        color: #fff;
        margin-bottom: 0;
      }
    `
  ]
})
export class GameCarouselComponent implements OnInit {
  @Input() gameCollection:any[]
  gameArray:any[]
  effect:string = 'scrollx'
  constructor() { }

  ngOnInit(): void {
    this.gameArray = this.gameCollection
  }

}
