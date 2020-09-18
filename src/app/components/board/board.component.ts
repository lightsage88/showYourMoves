import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Fighter } from '../../services/fighter.service'
import * as _ from 'lodash'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit
// OnChanges 
{
  @Input() fighters:Fighter[]
  fightersPresented: Fighter[]
  @Input() 
  get searchString():string {return this._searchString}
  set searchString(_searchString: string) {
    console.log('setting name', _searchString)
    this._searchString = (_searchString && _searchString.trim()) || undefined
    this.compareSearchStringToFighters()
  }
  private _searchString
  result:any
  @Input() loading:Boolean = true
  error:any
  _:any



  constructor() { }
  ngOnInit(): void {
    
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes)
  //   const valueWeWant = changes['searchString'].currentValue
  //   this.fighters = changes['fighters'].currentValue
  //   this.searchString = changes['searchString'].currentValue
  //   this.compareSearchStringToFighters()
  // }

  compareSearchStringToFighters():void {
    console.log(this._searchString)
    if(this._searchString == undefined) {
      console.log('globo')
      this.fightersPresented = this.fighters
    } else {
    this.fightersPresented = this.fighters.filter(char => {
     
      return _.startsWith(_.toLower(char.name), _.toLower(this.searchString))
     })
     console.log( 'yu gondie', this.searchString, this.fightersPresented)
    }
  }
}
