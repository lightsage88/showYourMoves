import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {

  dataToDisplay:any
  @Input() modalOpen:boolean
  @Input() modalLabel:string
  @Input() modalFranchiseInfo:any = {}
  @Input() modalCompanyInfo:any = {}
  @Output() modalBoolean = new EventEmitter<Event>()

  constructor() { }

  ngOnInit(): void {
    console.log('ngoninit', this.modalCompanyInfo, this.modalFranchiseInfo)
  }

  ngOnChanges(): void {
    console.log('ngonchanges', this.modalCompanyInfo, this.modalFranchiseInfo)
    //if the modalCompanyInfo or ModalFranchiseInfo changes,
        //we call a function that handles the switchover
        this.modalSwitchOver()
  }

  closeModal():void {
    this.modalOpen = false
  }

  handleCancel(e: Event):void {
    console.log('handleCancel was clicked')
    this.modalBoolean.emit(e)
  }

  modalSwitchOver():void {
    
  }

}
