import { Component, OnInit, Input } from '@angular/core';
import { Fighter } from '../../models/Fighter'


@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
  @Input() fighter:Fighter
  description:string = ''
  fighterObjectArray:any[]
  constructor() { }

  ngOnInit(): void {
    this.description = this.fighter.description
    this.fighterObjectArray = [
      {
        active: true,
        name: 'DESCRIPTION',
        disabled: false,
        info: this.description
      }
    ]
  }
}