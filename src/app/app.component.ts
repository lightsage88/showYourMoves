import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { Observable } from 'rxjs'
import { Fighter, FighterService } from './services/fighter.service'
import { ModalService } from './services/modal.service'
import { CompanyModalService } from './services/company-modal.service'
import { FranchiseModalInfo, FranchiseModalService } from './services/franchise-modal.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Output() searchStringUpdating = new EventEmitter<Event>()
  franchiseInfo:Observable<FranchiseModalInfo>
  title = 'showYourMoves';
  parentData:any;
  fighters:Observable<Fighter[]>
  result:any
  loading:Boolean = true
  modalLabel:string
  modalPresenting:Boolean = false
  error:any
  event:Event
  modalEvent:Event
  searchString:any
  constructor(
      private apollo: Apollo,
      private fighterService: FighterService,
      private modal: ModalService,
      private companymodal: CompanyModalService,
      private franchisemodal: FranchiseModalService
    ) { }

  ngOnInit(): void {
    this.fighterService.watch({
      first: 3
    })
    .valueChanges
    .subscribe(result => { 
      console.log(result)
      this.fighters = result.data.roster
      this.loading = false
      this.result = result
      console.log(this.fighters)
    })

    this.modal.ClickedToggle.subscribe(e => {
      this.toggleModalStatus(e)
    })

    // this.franchisemodal.getFranchiseInfo.subscribe(e => {
    //   console.log(e)
    // })
    

  }

  theNextPart(event:Event) {
    this.event = event
    console.log(this.event)
    this.searchString = (this.event.target as HTMLInputElement).textContent
    console.log('glee is a feeling you get', this.searchString)
    this.searchStringUpdating.emit(this.searchString)
    
  }

  toggleModalStatus(event:Event) {
    this.modalEvent = event
    let infoType = (event.target as HTMLInputElement).className 

    console.log('toggleModalStatus running...', this.modalEvent)
    this.modalPresenting = !this.modalPresenting

    //if it's the about one then set this.modalLabel to it
    if((event.target as HTMLInputElement).textContent === "About") {
      this.modalLabel = (event.target as HTMLInputElement).textContent
    } else {
      if(infoType.includes('franchiseButton')) {
        console.log('you clicked a franchiseButton')
        let franchiseId = (event.target as HTMLInputElement).attributes["data-franchise-id"].value
      console.log(franchiseId)
        //make an api call that feeds in the franchiseId for the appropriate data
      let eels
        eels = this.franchisemodal.getFranchiseInfo(franchiseId)
        console.log("sorroritit"  ,eels)
      } else {
        let companyId = (event.target as HTMLInputElement).attributes["data-company-id"].value
      console.log(companyId)
      let pigs
        pigs = this.companymodal.getCompanyInfo(companyId)
        console.log('piggy poop oo', pigs)
        //make an api call that feeds in the companyID for the apporpriate data
      }
    }


    

    // this.modalLabel = (event.target as HTMLInputElement).textContent
  }
}
