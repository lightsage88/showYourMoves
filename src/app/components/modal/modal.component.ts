import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {

  dataToDisplay:any
  @Input() modalOpen:boolean
  @Input() modalLabel:string
  @Input() modalInfo:any
  constructor() { }

  ngOnInit(): void {
    console.log('ngoninit', this.modalInfo)
  }

  ngOnChanges(): void {
    console.log('ngonchanges', this.modalInfo)
  }

  closeModal():void {
    this.modalOpen = false
  }

  

}
