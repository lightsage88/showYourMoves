import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../../services/modal.service'
import { SearchbarService } from '../../services/searchbar.service'
import { Subscription } from 'rxjs'
import * as _ from 'lodash'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() roster: any
  @Output() characterListTyping = new EventEmitter<Event>()
  @Output() modalBoolean = new EventEmitter<Event>()
  characterArray:any[]
  inputValue?:string
  options:string[]
  modalDisplay:boolean = false
  _:any
  private searchbarSub: Subscription
  private modalDisplaySub: Subscription
  @Input()
  text?:string

  constructor(private searchbar: SearchbarService, private modal: ModalService) { }

  ngOnInit(): void {
    console.log(this.inputValue)
    console.log(this.roster)
    this.searchbarSub = this.searchbar.ClickedName.subscribe(e => {
      this.characterListTyping.emit(e)
    })
  }

  onInput(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    console.log(value)
    // this.characterArray = this.roster.filter(char => {
     
    //  return _.startsWith(char.name, value)
    // })
    // console.log( 'yu gondie', this.characterArray)
    this.characterListTyping.emit(e)
    // if (!value || value.indexOf('@') >= 0) {
    //   this.options = [];
    // } else {
    //   this.options = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    // }
  }

  toggleModalDisplay(e: Event):void {
    this.modalBoolean.emit(e)
  }

}
