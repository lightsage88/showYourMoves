import { Component, OnInit, Input, Output } from '@angular/core';
import { NgModule } from '@angular/core'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() fighter:any
  @Output() fighterX:any
  constructor() { }

  ngOnInit(): void {
  }

}
