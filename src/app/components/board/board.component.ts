import { Component, OnInit, Input } from '@angular/core';
import { Fighter } from '../../services/fighter.service'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() fighters:Fighter[]
  result:any
  @Input() loading:Boolean = true
  error:any
  constructor() { }
  ngOnInit(): void {
    console.log(this.fighters)
  }
}
