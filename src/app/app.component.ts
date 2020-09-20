import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { Observable, Subscription } from 'rxjs'
import { Fighter, FighterService } from './services/fighter.service'
import { ModalService } from './services/modal.service'
import { CompanyModalService } from './services/company-modal.service'
import { FranchiseModalInfo, FranchiseModalService } from './services/franchise-modal.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
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
  companyDataCandy:Subscription
  companyDataInfo:any
  franchiseDataCandy:Subscription
  franchiseDataInfo:any
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

    this.companyDataCandy = this.companymodal.dataCandy$.subscribe(candy => this.companyDataInfo = candy.oneCompany )
    this.franchiseDataCandy = this.franchisemodal.franchiseCandy$.subscribe(candy => this.franchiseDataInfo = candy.oneFranchise)
    console.log('ngoninit stuff', this.companyDataCandy, this.franchiseDataCandy)
  }

  ngOnChanges(): void {
    console.log('CHANGES DETECTED', this.companyDataInfo, this.franchiseDataInfo)
  }

  theNextPart(event:Event) {
    this.event = event
    console.log(this.event)
    this.searchString = (this.event.target as HTMLInputElement).textContent
    console.log('glee is a feeling you get', this.searchString)
    this.searchStringUpdating.emit(this.searchString)
    
  }

  toggleModalStatus(event:Event) {
    console.log('toggleModalStatus running from app', this.companyDataInfo, this.franchiseDataInfo)
    this.modalEvent = event
    let infoType = (event.target as HTMLInputElement).className 

    console.log('toggleModalStatus running...', this.modalEvent)
    this.modalPresenting = !this.modalPresenting

    //if it's the about one then set this.modalLabel to it
    if((event.target as HTMLInputElement).textContent === "About") {
      this.modalLabel = (event.target as HTMLInputElement).textContent
    } else {
      if(infoType.includes('franchiseButton')) {
        let franchiseId = (event.target as HTMLInputElement).attributes["data-franchise-id"].value
        //make an api call that feeds in the franchiseId for the appropriate data
        this.franchisemodal.getFranchiseInfo(franchiseId)
        // this.franchisemodal.getFranchiseInfo(franchiseId).subscribe()
      } else {
        let companyId = (event.target as HTMLInputElement).attributes["data-company-id"].value
          this.companymodal.getCompanyInfo(companyId)
        console.log(this.companyDataInfo)
        //make an api call that feeds in the companyID for the apporpriate data
      }
    }


    

    // this.modalLabel = (event.target as HTMLInputElement).textContent
  }
}
