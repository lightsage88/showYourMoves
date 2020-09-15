import { Component, OnInit, Input, Output } from '@angular/core';
import { NgModule } from '@angular/core'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() fighter:any
  description:string
  constructor() { }

  ngOnInit(): void {
    this.description = this.fighter.description
  }

}
