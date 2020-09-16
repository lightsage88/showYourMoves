import { Component, OnInit, Input, Output } from '@angular/core';
import { NgModule } from '@angular/core'
import { Fighter } from '../../models/fighter'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() fighter:Fighter
  description:string
  fighterGames:any[]
  constructor() { }

  ngOnInit(): void {
    this.description = this.fighter.description
    console.log('this is your fighter', this.fighter)
    this.fighterGames = this.fighter.franchise.games
  }

}
