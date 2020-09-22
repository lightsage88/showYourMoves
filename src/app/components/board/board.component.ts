import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service'
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
  private _searchString:string
  result:any
  @Input() loading:Boolean = true
  error:any
  _:any



  constructor(private modal: ModalService) { }
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

  handleCardModalEvent(e:Event) {
    console.log('handlecardmodalevent running...', e)
    // let infoType = (e.target as HTMLInputElement).className
    // if(infoType.includes('franchiseButton')) {
    //   console.log('you clicked a franchiseButton')
    //   let franchiseId = (e.target as HTMLInputElement).attributes["data-franchise-id"].value
    // console.log(franchiseId)
    //   this.modal.handleFranchiseToggle(e, franchiseId)
    // } else {
    //   let companyId = (e.target as HTMLInputElement).attributes["data-company-id"].value
    //   this.modal.handleCompanyToggle(e, companyId)
    // }
    this.modal.handleToggle(e)
     

  }
  handleEvent(event: Event):void {
    console.log('boardhandline event', event)
  }
}
