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
    this.searchString = (this.event.target as HTMLInputElement).value
    this.searchStringUpdating.emit(this.searchString)
  }

  prepareModalData(event: Event): void {
    let infoType = (event.target as HTMLInputElement).className 
    if(infoType.includes('closeModalButton')) {
      console.log('forma  line to the throne')
      this.companyDataInfo = null
      this.franchiseDataInfo = null
    } else {
    
          if(infoType.includes('franchiseButton')) {
            let franchiseId = (event.target as HTMLInputElement).attributes["data-franchise-id"].value
            this.franchisemodal.getFranchiseInfo(franchiseId)
          } else {
            let companyId = (event.target as HTMLInputElement).attributes["data-company-id"].value
            this.companymodal.getCompanyInfo(companyId)
          }
    }
  }


  toggleModalStatus(event:Event) {
    this.modalEvent = event
    console.log('toggleModalStatus event running is', event, this.modalEvent)
    // let infoType = (event.target as HTMLInputElement).className
    this.companyDataInfo, this.franchiseDataInfo = null
    if((this.modalEvent.target as HTMLInputElement).className !== "aboutModalButton") {
      this.prepareModalData(event)
    } else {
      this.modalLabel = (event.target as HTMLInputElement).textContent
    }

    this.modalPresenting = !this.modalPresenting

    // if((event.target as HTMLInputElement).textContent === "About") {
    //   this.modalLabel = (event.target as HTMLInputElement).textContent
    // } else if(infoType) {
    //   console.log('spin move')
    //   if(infoType.includes('franchiseButton')) {
    //     let franchiseId = (event.target as HTMLInputElement).attributes["data-franchise-id"].value
    //     this.franchisemodal.getFranchiseInfo(franchiseId)
    //   } else {
    //     let companyId = (event.target as HTMLInputElement).attributes["data-company-id"].value
    //     this.companymodal.getCompanyInfo(companyId)
    //   }
    // } else {
    //   console.log('I bargebe cause I care')
    // }
  }
}
