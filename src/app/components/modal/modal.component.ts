import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal'
import { WikipediaService } from '../../services/wikipedia.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {

  dataToDisplay:any = {
    label: '',
    description: ''
  }
  @Input() modalOpen:boolean
  // @Input() modalLabel:string
  modalLabel: string
  modalDescription: string
  @Input() modalFranchiseInfo:any = {}
  @Input() modalCompanyInfo:any = {}
  @Output() modalBoolean = new EventEmitter<Event>()

  constructor(private wiki: WikipediaService) { }

  ngOnInit(): void {
    console.log('ngoninit', this.modalCompanyInfo, this.modalFranchiseInfo)
  }

  ngOnChanges(): void {
    console.log('ngonchanges', this.modalCompanyInfo, this.modalFranchiseInfo)
    let data
    //if the modalCompanyInfo or ModalFranchiseInfo changes,
        //we call a function that handles the switchover
    if(this.modalCompanyInfo == undefined && this.modalFranchiseInfo) {
      data = Object.assign({}, this.modalFranchiseInfo, {
        ...this.modalFranchiseInfo,
        type: 'franchise',
        label: this.modalFranchiseInfo.name

      })
    } else if (this.modalFranchiseInfo == undefined && this.modalCompanyInfo) {
      data = Object.assign({}, this.modalCompanyInfo, {
        ...this.modalCompanyInfo,
        type: 'company',
        label: this.modalCompanyInfo.name
      })
    } else {
      data = {
        type: 'about',
        label: 'About',
        description: `I wanted to brush up on my Angular skills while learning how to use GraphQL. 
        I am also a big fan of Super Smash Bros. Ultimate. If you ever want to play with me you can enter my Switch friend code:
        xxxxx. Occasionally I stream myself having open lobbies of Smash on my Twitch channel: twitch.tv/aztechMagic.`
      }
    }

      //let data = //whichever is not NULL, if they are both null, then send over some ABOUT page stuff
        this.modalSwitchOver(data)
  }

  closeModal():void {
    this.modalOpen = false
  }

  handleCancel(e: Event):void {
    console.log('handleCancel was clicked', e)
    this.modalBoolean.emit(e)
  }
 

  modalSwitchOver(data:any):void {
    this.modalDescription = null
    console.log('modalSwitchOver running...', data)
    let wikiID = data.wikiID
    this.modalLabel = data.label

    if(data.type === "franchise" || data.type === "company") {
      this.wiki.getWikiData(wikiID).subscribe(data => {
        this.modalDescription = data.query.pages[wikiID].extract
      })
    } else {
      this.modalDescription = data.description
    }

  }

}
