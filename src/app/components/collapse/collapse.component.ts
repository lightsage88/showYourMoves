import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
  @Input() fighter:any
  description:string
  fighterObjectArray:any[]
  constructor() { }

  ngOnInit(): void {
    console.log('yabba', this.fighter)
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
