import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public ClickedToggle = new EventEmitter<Event>()
  constructor() { }

  public handleToggle(e:Event): void {
    if(console && console.log) {
      console.log('handleToggle happening')
    }
    this.ClickedToggle.emit(e)
  }
}
